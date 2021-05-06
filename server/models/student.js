import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  studentID   : { type: String, required: true },
  userID      : String,
  fullName    : String,
  DOB         : Date,
  academicYear: String,
  department  : String,
  phoneNo     : String,
  comment     : [String],
  supervisor  : {
    internal  : Boolean,
    email     : String,
    fullName  : String,
    address   : String,
    position  : String,
    department: String,
    phoneNo   : String,
    DOB       : String,
    personalID: {
      No        : String,
      givenDate : Date,
      givenPlace: String,
    },
    bankAccount: {
      No      : String,
      bankName: String,
      branch  : String,
    },
    PITCode: String,
  },
  internship: {
    topic      : String,
    topicStatus: String,
    location   : String,
    host       : String,
    startTime  : Date,
    endTime    : Date,
    objective  : String,
    outcome    : String,
  }
});

const student = mongoose.model('Student', studentSchema);

export default student;