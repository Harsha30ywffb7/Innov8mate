import Project from "../../models/collaboration-schema.js";
const projects =async(req, res) =>{
    try{
        const allProjects = await Project.find({});
        res.status(200).send({projects:allProjects});
    }catch(error){
        console.log("error ", error);
        res.status(400).send("Internal server error");
    }
}

export default projects;