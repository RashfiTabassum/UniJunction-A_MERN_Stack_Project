import React, { Component } from 'react';
import './Calender.css';

class HeatmapCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipText: '',
      tooltipVisible: false,
      obj_timestamp: {},
      tooltipX: 0,
      tooltipY: 0,
    };
  }

  componentDidMount() {
    this.processListTimeStamp(this.props.data);
  }

  processListTimeStamp(list_timestamp) {
    let obj_timestamp = {};
    for (let i = 0; i < list_timestamp.length; i++) {
      const activity = list_timestamp[i];
      const date = typeof activity === 'number' ? new Date(activity) : new Date(activity.timestamp);
      const display_date = this.getDisplayDate(date);
      const increase = typeof activity === 'number' ? 1 : activity.count;
      if (!obj_timestamp[display_date]) {
        obj_timestamp[display_date] = increase;
      } else {
        obj_timestamp[display_date] += increase;
      }
    }
    this.setState({ obj_timestamp });
  }

  getDisplayDate(date_obj) {
    const prettyNumber = (number) => (number < 10 ? '0' + number.toString() : number.toString());
    const pretty_month = prettyNumber(date_obj.getMonth() + 1);
    const pretty_date = prettyNumber(date_obj.getDate());
    return `${date_obj.getFullYear()}-${pretty_month}-${pretty_date}`;
  }

  getCount(display_date) {
    const { obj_timestamp } = this.state;
    return obj_timestamp[display_date] || 0;
  }

  getColor(count) {
    const { colors } = this.props;
    if (typeof colors[0] === 'string') {
      return count > colors.length - 1 ? colors[colors.length - 1] : colors[count];
    } else {
      const isLargeNumber = (element) => element.count > count;
      const i = colors.findIndex(isLargeNumber);
      return i === -1 ? colors[colors.length - 1].color : colors[i - 1].color;
    }
  }
  handleRectHover = (count, date) => {
    const tooltipText = `${count} ${count > 1 ? 'completed tasks' : 'completed task'} on ${date}`;
    this.setState({ tooltipText, tooltipVisible: true });
  };

  handleRectMouseLeave = () => {
    this.setState({ tooltipVisible: false });
  };

  render() {
    const { border, hoverColor, monthNames, hDays, width, height } = this.props; // Extract width and height props
    const { tooltipText, tooltipVisible } = this.state;
    const { obj_timestamp } = this.state;
    const loop_html = []; // Store JSX elements for rendering
    const step = 20;
    const radius = border?.radius || 2;

    let start_date = new Date(this.props.start_date);
    let end_date = new Date(start_date);
    end_date.setMonth(end_date.getMonth() + 12);
    end_date.setDate(end_date.getDate() - 1);

    for (let i = 0; i < 12; i++) {
      loop_html.push(
        <text key={`month_label_${i}`} x={i * step * 4.5+20} y={-5} className="month">
          {monthNames[i]}
        </text>
      );
    }
    const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Labels for days of the week
    const weekLabels = weekNames.map((day, index) => (
      <text key={`week_label_${index}`} x={-50} y={index * step+12} className="week-label">
        {day}
      </text>
    ));
    // Add months
    const month_position = [];
    let using_month = start_date.getMonth();
    month_position.push({ month_index: using_month, x: 0 });

    // Add heatmap squares
    let week = 0;
    let g_x = week * step;
    let item_html = [];
    for (; start_date.getTime() <= end_date.getTime(); start_date.setDate(start_date.getDate() + 1)) {
      if (start_date.getDay() === 0) {
        item_html = [];
      }

      const month_in_day = start_date.getMonth();
      const data_date = this.getDisplayDate(start_date);
      if (start_date.getDay() === 0 && month_in_day !== using_month) {
        using_month = month_in_day;
        month_position.push({ month_index: using_month, x: g_x });
      }
      const count = this.getCount(data_date);
      const color = this.getColor(count);

      const y = start_date.getDay() * step;
      item_html.push(
        <rect
          key={data_date}
          className="day"
          width="15"
          height="15"
          y={y}
          fill={color}
          data-count={count}
          data-date={data_date}
          rx={radius}
          ry={radius}
        />
      );

      if (start_date.getDay() === 6) {
        loop_html.push(<g key={`week_${week}`} transform={`translate(${g_x}, 0)`}>{item_html}</g>);
        item_html = [];
        week++;
        g_x = week * step;
      }
    }

    if (item_html.length > 0) {
      loop_html.push(<g key={`week_${week}`} transform={`translate(${g_x}, 0)`}>{item_html}</g>);
    }

    return (
      <div className="heatmap-calendar">
        {/* <h1>Activity Heatmap</h1> */}
        <svg className="heatmap-svg" width={width} height={height}>
          <g transform="translate(80, 20)">
          {weekLabels}
            {loop_html}
            </g>
        </svg>
        {tooltipVisible && (
          <div className="tooltip" style={{ position: 'absolute', top: 0, left: 0 }}>
            {tooltipText}
          </div>
        )}
      </div>
    );
  }
}

HeatmapCalendar.defaultProps = {
  colors: ['#fff5e0', '#ffcb94', '#d89560', '#9e6230', '#4d2b0c'],
  border: {
    radius: 2,
  },
  hoverColor: '#999',
  start_date: new Date(2024, 0, 1),
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  hDays: ['M', 'W', 'F'],
  data: [],
};

export default HeatmapCalendar;
