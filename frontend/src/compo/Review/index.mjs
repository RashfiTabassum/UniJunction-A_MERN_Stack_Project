import React, { useState, useEffect } from 'react';
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react';
import img1 from "../photos/Bushra.jpg";
import img2 from "../photos/kyla.jpg";
import img3 from "../photos/olivia.jpg";
import img4 from "../photos/nadira.jpg";
import "./style.css";

const images = [
  { img: img1, text: '"Life-changing journey, my best investment in self-improvement."',text2:'-Ismael Hossain',text3:'Faraiha Tasnim' },
  { img: img2, text: '"Remarkable progress in self-development, highly recommend it!"',text2:'-Rashfi Tabassum',text3:'Kyla Genar' },
  { img: img3, text: '"Transformative experience, significantly boosted my personal growth."',text2:'-Mehreen Rahman',text3:'Olivia Tak'},
  { img: img4, text: '"The best choice I made for a self devolopment in a long time."',text2:'-Nabilah Tabassum',text3:'Nadira Omar' }
];

function Review() {
    const [imageIndexa, setImageIndexa] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndexa(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const showPrevImagea = () => {
    setImageIndexa(index => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImagea = () => {
    setImageIndexa(index => (index === images.length - 1 ? 0 : index + 1));
  };
  return (
    <div style={{backgroundColor:'white'}}>
        <h1 className='reviewtext_nab'>What Our Students Are Saying</h1>
           <div className="image-slidera_nab" style={{ width: "80%", height: "100%", position: 'relative', borderRadius: '20px', }}>
            
      <div style={{ width: "50%", height: "100%", display: 'flex', overflow: 'hidden', }}>
        {images.map((item, index) => (
          <div key={index} className='slider-itema_nab' style={{ transform: `translateX(${-100 * imageIndexa}%)`, width: "100%", flexShrink: 0 }}>
            <img src={item.img} alt={item.text} className='image-slider-imga_nab'  />
            {/* <img src={item.img} alt={item.text} className='image-slider-imgaa' /> */}
            <img src={item.img} alt={item.text} className='image-slider-imgaaa_nab' />
            <p className='slider-text3a_nab'>{item.text3}</p>
          </div>
        ))}
      </div>
      <div className='img-text_nab'>
      <div style={{ width: "50%", height: "91%",left:"50%",top:'00%',position:'absolute', display: 'flex', overflow: 'hidden', borderRadius: '20px',backgroundColor:'white',borderRadius:'0px' }}>
        {images.map((item, index) => (
          <div key={index} className='slider-itema_nab' style={{ transform: `translateX(${-100 * imageIndexa}%)`, width: "100%", flexShrink: 0, }}>
            {/* <img src={item.img} alt={item.text} className='image-slider-imga' /> */}
            <p className='slider-texta_nab'>{item.text}</p>
            <p className='slider-text2a_nab'>{item.text2}</p>

          </div>
        ))}
      </div>
      </div>

      <button onClick={showPrevImagea} className='img-btna_nab' style={{ left: 0 }}><ArrowBigLeft /></button>
      <button onClick={showNextImagea} className='img-btna_nab' style={{ right: 0 }}><ArrowBigRight /></button>

      <div className='btnStylea_nab'>
        {images.map((_, index) => (
          <button key={index} onClick={() => setImageIndexa(index)} className='dot-btna_nab'>
            {index === imageIndexa ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Review
