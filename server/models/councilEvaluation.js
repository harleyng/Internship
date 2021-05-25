import mongoose from 'mongoose';

const councilEvaluationSchema = mongoose.Schema({
  id       : String,
  studentID: { type: String, required: true },
  defense  : {
    juryMember : String,
    institution: String,
    contact    : String,
    overallDecision: Number,
    comments       : String,
    criteria   : {
      introduction       : Number,
      literatureReview   : Number,
      researchMethodology: Number,
      feasibilityStudy   : Number,
      overallPerformance : Number,
    },
  },  
  report: {
    juryMember : String,
    institution: String,
    contact    : String,
    ratings    : Number,
    comments   : String,
    review     : {
      background    : Number,
      objective     : Number,
      approach      : Number,
      results       : Number,
      grammar       : Number,
      visualization : Number,
      systematic    : Number,
      interpretation: Number
    }
  }
})

export default mongoose.model("CouncilEvaluation", councilEvaluationSchema);