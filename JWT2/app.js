const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.post('/login', (req, res) => {
    // Validate user credentials (this is just an example)
    const user = {
        id: 1,
        username: 'example_user',
        role: 'user',
    };

    // Create a JWT token
    const token = jwt.sign(user, 'your_secret_key', { expiresIn: '1h' });

    // Send the token to the client
    res.json({ token });
});
let port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
