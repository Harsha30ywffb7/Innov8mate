import User from '../../models/user-schema.js';


const registerUser = async (req, res) => {
    try {
        console.log("backend is fine")
        const { email, about, firstName, lastName, country, street, city, state, pincode, education, interests, phoneNumber, hackathonList, projectList, companyList, ideaList, friendList, jobList} = req.body;
        /*profile image,  */ 

        console.log(email);

        // Find the existing user by email
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send({ error: 'User not found! ' });
        }

        // Update the user with new details
        user.about = about;
        user.firstName = firstName;
        user.lastName = lastName;
        user.country = country;
        user.street = street;
        user.city = city;
        user.state = state;
        user.pincode = pincode;
        user.education = education;
        user.interests = interests;
        user.phoneNumber = phoneNumber;
        user.hackathonList = hackathonList;
        user.projectList = projectList;
        user.companyList = companyList;
        user.ideaList = ideaList;
        user.friendList = friendList;
        user.jobList = jobList;

        // Save the updated user
        await user.save();
        res.status(200).json({ message: 'User details updated successfully', user });
    } catch (error) {
        console.log("error is threr")
        console.error('Error updating user details:', error);
        res.status(500).json({ error: 'User not found' });
    }
};

export default registerUser;
