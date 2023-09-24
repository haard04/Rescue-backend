import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  address: {
    type: String, 
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  resources: {
    type: [String],
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String, 
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  uid: {
    type: Number,
    required: true,
    unique: true, 
  },
 
 verified:{
  type:Boolean,
 },
  availability:{
    type:Boolean,
   
  }
});

const Agency = mongoose.model('Agency', agencySchema);

export default Agency