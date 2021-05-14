import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
  id        : String,
  studentID : { type: String, require: true },
  documents : [{
    name  : String,
    image : String,
    status: String
   }],
})

export default mongoose.model("Document", documentSchema);