import Opportunity from '../models/opportunity.js'
import mongoose from 'mongoose'

export const getOpportunities = async (req, res) => {
	try { 
		const pageSize = parseInt(req.query.pageSize);
		const pageNumber = parseInt(req.query.pageNumber);
		const skip = pageSize * (pageNumber - 1);
		var totalPages, totalItems;

		const opportunities = await Opportunity.find({}, { attachment: 0 }).sort({ updatedAt: -1 })
			.then((resp) => {
				totalPages = Math.ceil(resp.length / pageSize);
				totalItems = resp.length;

				// One Page
				if (totalPages === 1) {
					return resp
				} else if (pageNumber === totalPages) { // Last Page
					return resp.slice(skip, totalItems)
				} else {
					return resp.slice(skip, skip + pageSize)
				}
			})
		
		// const opportunities = await Opportunity.find().skip(skip).limit(pageSize).sort({ updatedAt: -1 });
		res.status(200).json({ success: true, opportunities, totalPages: totalPages, totalItems: totalItems })
	} catch (error) { 
		console.log(error)
		res.status(500).json({ success: false, message: "Internal server error" })
	}
}

export const createOpportunity = async (req, res) => {
	try {
		const newOpportunity = new Opportunity({ ...req.body, updatedAt: new Date().toISOString() })

		await newOpportunity.save();

		res.status(201).json({ success: true, opportunity: newOpportunity })

	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: "Internal server error" })
	}
}

export const getOpportunity = async (req, res) => {
	const id = req.params.opportunityID;

	try {
		const opportunity = await Opportunity.findById(id);

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ success: false, message: "Invalid id" });
		if (opportunity === null) return res.status(404).json({ success: false, message: "No result with that id" })

		res.status(200).json({ success: true, opportunity })
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" })
	}
}

export const updateOpportunity = async (req, res) => {
	const id = req.params.opportunityID;
	const update = { ...req.body, updatedAt: new Date().toISOString() };

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ success: false, message: "Invalid id" });

		const updatedOpportunity = await Opportunity.findByIdAndUpdate(id, update, {
			new: true
		});

		res.status(200).json({ success: true, opportunity: updatedOpportunity })
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal server error" })
	}
}

export const deleteOpportunity = async (req, res) => {
	const id = req.params.opportunityID;

	try {
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ success: false, message: "Invalid id" });

		const deletedOpportunity = await Opportunity.findOneAndDelete({ _id: id});

		res.status(200).json({ success: true, opportunity: deletedOpportunity })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: "Internal server error" })
	}
}

