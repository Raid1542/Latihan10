const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });

        const user = results[0];

        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: err.message });

            if (!isMatch) {
                return res.status(401).json({ message: "Wrong password" });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );

            res.json({
                message: "Login berhasil",
                token: token
            });
        });
    });
};
