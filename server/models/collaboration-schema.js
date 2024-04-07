import mongoose from "mongoose";

const collabSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique:true
    },
    postedBy:{
        type:String,
        required: true
    },
    postedAt:{
        type:Date,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    techStack:[{
        type: String,
        required:true
    }],
    duration:{
        type: String,
        required:true
    },
    location:{
        type: String
    },
    membersNeeded:{
        type:Number,
        required: true
    },
    userUniqueId:{
        type: mongoose.Schema.Types.String,
        ref:'User',
        required:true
    }
})

const Project = mongoose.model("Projects", collabSchema);

export default Project;