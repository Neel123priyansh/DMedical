import mongoose from 'mongoose';

const web3Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  select: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});
const Web3Model = mongoose.model('web3', web3Schema);
export default Web3Model