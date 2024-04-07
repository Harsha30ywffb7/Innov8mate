import Project from "../../models/collaboration-schema.js"
import User from '../../models/user-schema.js'
const addProject = async (req, res) => {
    try {
        const { title, description, postedBy, postedAt, duration, membersNeeded, userUniqueId, techStack, deadline, location } = req.body;

        const projectExisted = await Project.findOne({ title });
        if (projectExisted) {
            return res.status(400).send({ msg: `Project already existed with the same title: ${title}` });
        }

        const newProject = new Project({
            title,
            description,
            postedAt,
            postedBy,
            duration,
            membersNeeded,
            userUniqueId,
            techStack,
            deadline,
            location
        });

        await newProject.save();

        const user = await User.findOneAndUpdate(
            { username: userUniqueId }, // Find the user by their username
            { $push: { projectList: { Project: newProject._id, owner: true, collaborator: false } } }, // Push the new idea to the project list with owner set to true
            { new: true } // Return the updated document after the update
        );

        res.status(200).send({ msg: "Project added successfully", newProject });

    } catch (error) {
        console.log("Error in adding", error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
};

export default addProject;
