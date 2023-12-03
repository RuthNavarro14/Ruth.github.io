const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-qsjnh/endpoint/data/v1/find', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Schema for Teachers
const teacherSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true }, // Assuming teachers will use Gmail addresses
    password: String,
    subjects: [String],
    class: String
});
const Teacher = mongoose.model('Teacher', teacherSchema);

// Schema for Students
const studentSchema = new mongoose.Schema({
    name: String,
    LRN: { type: String, unique: true }, // LRN number for students
    password: String,
    grade: String,
    class: String,
    parent_email: String
});
const Student = mongoose.model('Student', studentSchema);

// Handle Teacher Sign-up
app.post('/signup/teacher', async (req, res) => {
    try {
        const { name, email, password, subjects, class: teacherClass } = req.body;
        const newTeacher = new Teacher({ name, email, password, subjects, class: teacherClass });
        await newTeacher.save();
        res.status(201).send('Teacher signed up successfully');
    } catch (err) {
        res.status(500).send('Error signing up teacher');
    }
});

// Handle Student Sign-up
app.post('/signup/student', async (req, res) => {
    try {
        const { name, LRN, password, grade, class: studentClass, parent_email } = req.body;
        const newStudent = new Student({ name, LRN, password, grade, class: studentClass, parent_email });
        await newStudent.save();
        res.status(201).send('Student signed up successfully');
    } catch (err) {
        res.status(500).send('Error signing up student');
    }
});
