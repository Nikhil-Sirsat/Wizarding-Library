const User = require('../models/user.js');

module.exports.postSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email });
        await User.register(newUser, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.login = (req, res) => {
    // req.session.user = req.user;
    // console.log("Session Set: ", req.session); // Log session content
    res.cookie("connect.sid", req.sessionID, {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === 'production',
    }).status(200).json({ user: req.user, message: 'Login successful' });
}

module.exports.logOut = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
}

module.exports.protected = (req, res) => {
    res.status(200).json({ user: req.user, message: 'This is a protected route' });
}

module.exports.edit = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body.user;

        const userBeforeUpdate = await User.findById(id);
        if (!userBeforeUpdate) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        const user = await User.findByIdAndUpdate(id, updateData, { new: true });

        // Check if the update actually changed any data
        if (JSON.stringify(userBeforeUpdate.toObject()) === JSON.stringify(user.toObject())) {
            console.log('User information not updated');
            return res.status(401).json({ message: 'user information not updated ' });
        }

        if (user) {
            // console.log(`User information updated successfully: ${user}`);
            return res.status(200).json({ message: 'User Information Updated Successfully' });
        } else {
            return res.status(404).json({ message: 'User Not Found' });
        }

    } catch (error) {
        console.log('Error in try-catch: ', error);
        res.status(500).json({ message: 'An error occurred while updating user information', error: error.message });
    }
}

module.exports.checkPassword = async (req, res) => {
    try {
        const { userId, password } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ valid: false });
        }

        user.authenticate(password, (err, user, passwordError) => {
            if (err || passwordError) {
                return res.status(400).json({ valid: false });
            }
            return res.status(200).json({ valid: true });
        });
    } catch (error) {
        console.error('Error checking password:', error);
        res.status(500).json({ valid: false, message: error.message });
    }
}