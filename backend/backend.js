const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require('path');

const JWT_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../src/images')));
const mongoUrl = "mongodb+srv://u2004004:shaan@cluster0.nxlfstl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to database");
}).catch(e => {
  console.error("Database connection error:", e);
});


// Mentor Schema
const MentorSchema = new mongoose.Schema(
  {
    fname: { type: String },
    lname: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    birthdate: { type: String },
    country: { type: String },
    profession: { type: String },
    institution: { type: String },
    qualification:{type: String},
    studyPeriod:{type: String},
    facebookLink: { type: String },
    instagramLink: { type: String },
    linkedinLink: { type: String },
    fee: { type: Number },
    stat: { type: String },
    image: { type: String },
    pp: {type: String},
    intro: {type: String},
    trial: {type: String},
    bio: { type: String },
    connectedStudents: { type: Number, default: 0 } ,// Add this line
    role: { type: String, default: "mentor" } // Add this line
  },
  { collection: "MentorInfo" }
);
const Mentor = mongoose.model("MentorInfo", MentorSchema);

// Student Schema
const StudentSchema = new mongoose.Schema(
  {
    fname: { type: String },
    lname: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    birthdate: { type: String },
    country: { type: String },
    facebookLink: { type: String },
    instagramLink: { type: String },
    linkedinLink: { type: String },
    stat: { type: String },
    institution: { type: String },
    pp: {type: String},
    mentors: [{
      mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'MentorInfo' },
      mentorName: { type: String }
    }], // Add this line
    wishlist: [{
     mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'MentorInfo' },
      mentorName: { type: String }
    }], // Add this line for the wishlist
    role: { type: String, default: "student" } // Add this line
  },
  { collection: "StudentInfo" }
);
const Student = mongoose.model("StudentInfo", StudentSchema);




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../src/images'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });


app.post("/register", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pp', maxCount: 1 }, { name: 'intro', maxCount: 1 },{ name: 'trial', maxCount: 1 }]), async (req, res) => {
  const { fname, lname, email, password, birthdate,country, facebookLink, instagramLink, linkedinLink, fee,profession, institution, qualification,studyPeriod, stat,bio, role } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = role === "mentor" ? await Mentor.findOne({ email }) : await Student.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User Exists" });
    }

    let imageFileName = "";
    if (req.files['image']) {
      imageFileName = req.files['image'][0].filename;
    }

    let ppFileName = "";
    if (req.files['pp']) {
      ppFileName = req.files['pp'][0].filename;
    }
    let introFileName = "";
    if (req.files['intro']) {
      introFileName = req.files['intro'][0].filename;
    }

    let trialFileName = "";
    if (req.files['trial']) {
      trialFileName = req.files['trial'][0].filename;
    }

    if (role === "mentor") {
      await Mentor.create({
        fname,
        lname,
        email,
        password: encryptedPassword,
        birthdate,
        country,
        facebookLink,
        instagramLink,
        linkedinLink,
        profession,
        institution,
        qualification,
        studyPeriod,
        fee,
        stat,
        bio,
        image: imageFileName, // Save CV filename in the database
        pp: ppFileName,      // Save profile picture filename in the database
        intro: introFileName,
        trial: trialFileName,
      });
    } else {
      // Create Student entry
      await Student.create({
        fname,
        lname,
        email,
        password: encryptedPassword,
        birthdate,
        country,
        facebookLink,
        instagramLink,
        linkedinLink,
        stat,
        institution,
        pp: ppFileName, // Save profile picture filename in the database
      });
      
    }
    res.send({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user is a mentor
    let user = await Mentor.findOne({ email });

    if (!user) {
      // If not a mentor, check if the user is a student
      user = await Student.findOne({ email });

      if (!user) {
        return res.json({ error: "User Not found" });
      }
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ role: user.role, userId: user._id }, JWT_SECRET);
      const profilePic = user.pp; // Assuming `pp` is the field where profile picture filename is stored
      let userId; // Variable to store either studentId or mentorId

      if (user.role === 'mentor') {
        userId = user._id; // Assuming mentorId is stored directly as _id
      } else {
        userId = user._id; // Assuming studentId is stored directly as _id
      }

      // Return user data including _id
      res.json({
        status: "ok",
        data: {
          token,
          role: user.role,
          profilePic,
          userId, // Sending _id here
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          country: user.country,
          stat: user.stat,
          institution: user.institution, // Include institution info for mentors
          birthdate: user.birthdate,
          facebookLink: user.facebookLink,
          instagramLink: user.instagramLink,
          linkedinLink: user.linkedinLink,
          mentorId: user.role === 'mentor' ? user._id : undefined,
          studentId: user.role === 'student' ? user._id : undefined,
          fee: user.role === 'mentor' ? user.fee : undefined,

        }
      });
    } else {
      return res.json({ error: "Invalid Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signup-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user is a mentor
    let user = await Mentor.findOne({ email });

    if (!user) {
      // If not a mentor, check if the user is a student
      user = await Student.findOne({ email });

      if (!user) {
        return res.json({ error: "User Not found" });
      }
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ role: user.role, userId: user._id }, JWT_SECRET);
      const profilePic = user.pp; // Assuming `pp` is the field where profile picture filename is stored
      let userId; // Variable to store either studentId or mentorId

      if (user.role === 'mentor') {
        userId = user._id; // Assuming mentorId is stored directly as _id
      } else {
        userId = user._id; // Assuming studentId is stored directly as _id
      }

      // Return user data including _id
      res.json({
        status: "ok",
        data: {
          token,
          role: user.role,
          profilePic,
          userId, // Sending _id here
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          country: user.country,
          stat: user.stat,
          institution: user.institution, // Include institution info for mentors
          birthdate: user.birthdate,
          facebookLink: user.facebookLink,
          instagramLink: user.instagramLink,
          linkedinLink: user.linkedinLink,
          mentorId: user.role === 'mentor' ? user._id : undefined,
          studentId: user.role === 'student' ? user._id : undefined
        }
      });
    } else {
      return res.json({ error: "Invalid Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getAllMentors", async (req, res) => {
  try {
    const allMentors = await Mentor.find({});
    res.send({ status: "ok", data: allMentors });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", error: "Failed to fetch mentors" });
  }
});

app.get("/getAllStudents", async (req, res) => {
  try {
    const allStudents = await Student.find({});
    res.send({ status: "ok", data: allStudents });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", error: "Failed to fetch students" });
  }
});

// Assuming you have existing setup for Express server, MongoDB connection, and Mongoose models


const TransactionSchema = new mongoose.Schema(
  {
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'MentorInfo', required: true },
    mentorName: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentInfo', required: true },
    studentName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    fee: { type: Number, required: true }
  },
  { collection: "TransactionInfo" }
);

const Transaction = mongoose.model("TransactionInfo", TransactionSchema);

app.post("/book-lesson", async (req, res) => {
  const { mentorId, mentorName, studentId, studentName, fee } = req.body;
  
  
  try {
    
    // Validate input (if needed)
    if (!mentorId || !studentId || !fee) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    // Retrieve mentor and student names if not provided
    const mentor = mentorName || await Mentor.findById(mentorId).then(m => `${m.fname} ${m.lname}`);
    const student = studentName || await Student.findById(studentId).then(s => `${s.fname} ${s.lname}`);
    
    await Transaction.create({
      mentorId,
      mentorName: mentor,
      studentId,
      studentName: student,
      fee
    });

     // Update StudentInfo with mentor information
    await Student.findByIdAndUpdate(studentId, {
      $push: {
        mentors: { mentorId, mentorName: mentor } // Assuming 'mentors' is an array field in StudentInfo schema
      }
    });

     // Increment the connectedStudents count for the mentor
     await Mentor.findByIdAndUpdate(mentorId, {
      $inc: { connectedStudents: 1 } // Increment by 1
    });
    
    res.send({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", error: "Failed to create transaction" });
  }
});

app.get("/getAllTransactions", async (req, res) => {
  try {
    const allTransactions = await Transaction.find({});
    res.send({ status: "ok", data: allTransactions });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", error: "Failed to fetch students" });
  }
});

app.get("/getTotalFees", async (req, res) => {
  try {
    const totalFees = await Transaction.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$fee" }
        }
      }
    ]);

    res.send({ status: "ok", totalFees: totalFees[0]?.total || 0 });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", error: "Failed to calculate total fees" });
  }
});
app.get("/student/:id/enrolled-courses", async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId).populate('mentors.mentorId', 'fname lname email institution qualification studyPeriod pp');

    if (!student) {
      return res.status(404).json({ status: "error", error: "Student not found" });
    }

    res.json({ status: "ok", data: student.mentors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "Failed to fetch enrolled courses" });
  }
});
app.get("/mentor/:id/connected-students", async (req, res) => {
  try {
    const mentorId = req.params.id;

    // Find all transactions where the mentorId matches
    const transactions = await Transaction.find({ mentorId }).populate('studentId', 'fname lname email institution pp');

    if (!transactions.length) {
      return res.status(404).json({ status: "error", error: "No connected students found for this mentor" });
    }

    // Extract the student details from the transactions
    const connectedStudents = transactions.map(transaction => ({
      studentId: transaction.studentId._id,
      fname: transaction.studentId.fname,
      lname: transaction.studentId.lname,
      email: transaction.studentId.email,
      institution: transaction.studentId.institution,
      pp: transaction.studentId.pp,
      date: transaction.date // Include the date of connection
    }));

    res.json({ status: "ok", data: connectedStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "Failed to fetch connected students" });
  }
});

app.post("/add-to-wishlist", async (req, res) => {
  const { mentorId, mentorName } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const studentId = decodedToken.userId;

    // Add mentor to student's wishlist
    await Student.findByIdAndUpdate(studentId, {
      $push: {
        wishlist: { mentorId, mentorName }
      }
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", error: "Failed to add to wishlist" });
  }
});

app.get("/student/:id/wishlist", async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId).populate('wishlist.mentorId', 'fname lname email institution qualification studyPeriod pp');

    if (!student) {
      return res.status(404).json({ status: "error", error: "Student not found" });
    }

    res.json({ status: "ok", data: student.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: "Failed to fetch wishlist" });
  }
});



app.listen(5000, () => {
  console.log("Server Started");
});
