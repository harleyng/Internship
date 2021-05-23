import mongoose from 'mongoose';

const scoreSchema = mongoose.Schema({
  id          : String,
  studentID   : { type: String, require: true },
  supervisor  : Number,
  report      : Number,
  presentation: Number,
})

export default mongoose.model("Score", scoreSchema);