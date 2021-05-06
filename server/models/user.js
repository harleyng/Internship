import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id      : { type: String },
  email   : { type: String, require: true },
  password: { type: String, require: true },
  role    : String
}); 

const user = mongoose.model('User', userSchema);

export default user;