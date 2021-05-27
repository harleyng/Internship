import mongoose from 'mongoose';

const planSchema = mongoose.Schema({
  id       : String,
  studentID: { type: String, require: true },
  periods   : [{
    title    : String,
    overview : String,
    startTime: Date,
    endTime  : Date,
    taskID   : String
  }],
})

export default mongoose.model("Plan", planSchema);