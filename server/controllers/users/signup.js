import User from '../../models/user-schema.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if user with the provided email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).send({ error: 'User with this email or username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            // Initialize other fields as necessary, or leave them to be added later
        });

        // Save the user to the database
        const createdUser = await newUser.save();
        res.status(200).json({ message: 'User signed up successfully', user: { email:email, username:username ,id:createdUser.id} });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default signup;
