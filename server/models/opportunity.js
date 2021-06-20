import mongoose from "mongoose";

const opportunitySchema = mongoose.Schema({
  id: String,
  organizationName: { 
		type: String, 
	},
	description: {
		type: String
	},
  attachment: {
		type: [String],
	},
	updatedAt: {
		type: Date
	}
});

export default mongoose.model("Opportunity", opportunitySchema);
