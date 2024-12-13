const mysql2 = require('mysql2');
const bcrypt = require('bcrypt');

class UserModel {
    constructor() {
        this.connection = mysql2.createConnection({
            host: '45.55.136.114',
            user: 'dlash',
            database: 'dlash',
            password: 'time4DB!'
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                return;
            }
            console.log('Connected to MySQL database');
        });

        // this.initializeTable();
    }
    initializeTable() {
        const createUserTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                username VARCHAR(255) PRIMARY KEY,
                password VARCHAR(255) NOT NULL
            )
        `;
        this.connection.query(createUserTableQuery);
        this.addDefaultUser();
    }

    async addDefaultUser() {
        const hashedPassword = await bcrypt.hash('password123', 10);
        const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
        this.connection.query(checkUserQuery, ['testuser314'], (err, results) => {
            if (results.length === 0) {
                const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
                this.connection.query(insertUserQuery, ['testuser314', hashedPassword]);
            }
        });
    }

    async addUser(username, password) {
        return new Promise(async (resolve, reject) => {
            // Check if username already exists
            const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
            this.connection.query(checkUserQuery, [username], async (err, results) => {
                if (err) {
                    return reject({ error: 'Database error' });
                }

                if (results.length > 0) {
                    return reject({ error: 'Username already exists' });
                }

                // Hash password
                const hashedPassword = await bcrypt.hash(password, 10);

                // Insert new user
                const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
                this.connection.query(insertUserQuery, [username, hashedPassword], (err, result) => {
                    if (err) {
                        return reject({ error: 'Failed to add user' });
                    }
                    resolve({
                        id: result.insertId,
                        username: username,
                        message: 'User added successfully'
                    });
                });
            });
        });
    }

    async authenticateUser(username, password) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE username = ?';
            this.connection.query(query, [username], async (err, results) => {
                if (err) {
                    return reject({ error: 'Database error' });
                }

                if (results.length === 0) {
                    return resolve({ authenticated: false });
                }

                const user = results[0];
                const isMatch = await bcrypt.compare(password, user.password);

                if (isMatch) {
                    resolve({
                        authenticated: true,
                        token: "someAuthToken"
                    });
                } else {
                    resolve({ authenticated: false });
                }
            });
        });
    }
}

module.exports = new UserModel();