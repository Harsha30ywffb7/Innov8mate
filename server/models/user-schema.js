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
  password: {
    type: String,
    required: true
  },
  education: [{
    type: String // Assuming Hackathons are stored as strings
  }],
  interests: [{
    type: String
  }],
  profileImage: String,
  phoneNumber: String,
  location: String,
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
