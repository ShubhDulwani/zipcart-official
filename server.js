const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'html')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Connect to MongoDB first
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Mongo Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Sign-up Route with validation
app.post('/signup', async (req, res) => {
    try {
        // Validate request body
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const { email, password } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPass });
        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ message: "Email already exists" });
        }
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Sign-in Route with validation
app.post('/signin', async (req, res) => {
    try {
        // Validate request body
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        res.json({ message: "Sign-in successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));