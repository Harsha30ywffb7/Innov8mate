import express from 'express'
import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  founder: {
    name: { type: String, required: true },
    profileLink: { type: String, required: false },
    description: { type: String, required: false },
  },
  userUniqueId: {
    type: mongoose.Schema.Types.String, // Assuming this refers to the user who posted the idea
    ref: 'User', // Reference to the User schema
    required: true
},
  description: { type: String, required: true },
  sector: { type: String, required: true },
  location: { type: String, required: true },
  companyLinks: {
    website: { type: String, required: true },
    socialMediaLink:{type: String, required: true },
  },
  sharesDiluted: { type: String, required: true },
  investmentNeeded: { type: String, required: true }
});

const Company = mongoose.model('Company', companySchema);

export default Company;