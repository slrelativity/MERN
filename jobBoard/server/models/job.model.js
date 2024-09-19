import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    requirements: [true, 'Job title is required'],
    minlength: [2, 'Job title must be at least 2 characters long'],
    maxlength: [50, 'Job title must be at least 50 characters long'],
  },
  company: {
    type: String,
    requirements: [true, 'Company is required'],
    minlength: [2,'Company must not exceed 100 characters' ]
  },
  
  isRemote: {
    type: Boolean,
    default: false 
  },

  status: {
    type: String,
    default: "pending"
  },
}, { timestamps: true});



const Job = mongoose.model('Job', jobSchema);

export default Job;