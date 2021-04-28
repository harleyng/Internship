import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email   : { type: String, require: true },
  password: { type: String, require: true },
  id      : { type: String },
});

const user = mongoose.model('User', userSchema);

export default user;