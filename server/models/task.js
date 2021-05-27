import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  _id       : String,
  lists  : [{
    id   : String,
    title: String,
    cards: [{
      id   : String,
      title: String
    }]
  }],
})

export default mongoose.model("Task", taskSchema);