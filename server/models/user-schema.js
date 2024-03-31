import express from 'express'
import mongoose from 'mongoose'

// Define User schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  about: {
    type: String,
  },
  firstName:{
    type: String,
  },
  lastName:{
    type: String,
  },
  password: {
    type: String,
  },
  country: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
  education: {
    type: String // Assuming Hackathons are stored as strings
  },
  interests: [{
    type: String
  }],
  profileImage: String,
  phoneNumber: String,
  // Define relations
  hackathonList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hackathon'
  }],
  projectList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  companyList: [{
    invested: Boolean,
    founded: Boolean,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company'
    }
  }],
  ideaList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idea'
  }],
  friendList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  jobList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
});


// Create User model
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
