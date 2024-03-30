import User from '../../models/user-schema.js';
import bcrypt from 'bcrypt';
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email  });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }

        // Here, you would typically generate a token or session
        // For this example, we'll just return a success message
        res.status(200).json({ message: 'User signed in successfully', user: { email: user.email, username: user.username,id:user.id } });
    } catch (error) {
        console.error('Error signing in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export default signin;
