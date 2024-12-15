
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    profile:{
        type:String
    },
    name:{
        type:String
    },
    username:{
        type:String
    }

})