import mongoose from "mongoose";

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    problemStatement: {
        type: String,
        required: true
    },
    userUniqueId: {
        type: mongoose.Schema.Types.String, // Assuming this refers to the user who posted the idea
        ref: 'User', // Reference to the User schema
        required: true
    },
    impact: {
        type: String,
        required: true
    },
    uniqueness: {
        type: String,
        required: true
    },
    owner: {
        type: Boolean,
        default: false
    },
    supporter: {
        type: Boolean,
        default: false
    },
    approach: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    supportType: {
        type: String,
        required: true
    },
    prototypeLinks: {
        type: String,
        required:true // Assuming an idea can have multiple prototype links
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Idea = mongoose.model("Idea",IdeaSchema);

export default Idea;