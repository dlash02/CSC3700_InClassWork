const express = require('express');
const cors = require('cors');
const UserModel = require('./models/userModel');

const app = express();
const port = 4444;

app.use(cors({
    origin: '*', // Be more specific in production
    methods: ['GET', 'POST']
}));
app.use(express.json()); // for JSON payloads
app.use(express.urlencoded({ extended: true })); // for form-data


app.get('/create-default-user', async (req, res) => {
    try {
        const result = await UserModel.addDefaultUser();
        res.status(201).json({ message: 'Default user created successfully' });
    } catch (error) {
        res.status(400).json(error);
    }
});
app.get('/login', async (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {
        const result = await UserModel.authenticateUser(username, password);
        res.json({ login: result });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/register', async (req, res) => {
    console.log(req.body); // Log to see what's being received
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }

    try {
        const result = await UserModel.addUser(username, password);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});