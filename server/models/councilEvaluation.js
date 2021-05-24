import mongoose from 'mongoose';

const councilEvaluationSchema = mongoose.Schema({
  id       : String,
  studentID: { type: String, required: true },
  defense  : {
    juryMember : [String],
    institution: String,
    contact    : String,
    criteria   : {
      introduction       : Number,
      literatureReview   : Number,
      researchMethodology: Number,
      feasibilityStudy   : Number,
      overallPerformance : Number,
    },
    overallDecision: String,
    comments       : String
  },
  report: {
    reviewerName: String,
    institution : String,
    contact     : String,
    ratings     : Number,
    review      : {
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