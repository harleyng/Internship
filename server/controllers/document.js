import Document from '../models/document.js'

export const getDocuments = async (req, res) => {
  try { 
    const documents = await Document.find();

    res.status(200).json(documents)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

export const createDocumentModel = async (req, res) => {
  const studentID = req.params.studentID;
  const newDocument = new Document({ studentID: studentID, documents: [] });
  try {
    await newDocument.save();

    const documents = await Document.find();

    res.status(201).json(documents);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const createDocument = async (req, res) => {
  const filter = { _id: req.body.id };
  const update = { $addToSet: {documents : [req.body.document]} }
  try {
    await Document.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true 
    });
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}

export const updateDocument = async (req, res) => {
  const filter = { _id: req.body.id };
  const update = { $set: {'documents.$[element]': [req.body.document]} }
  try {
    await Document.findOneAndUpdate(filter, update, {
      arrayFilters: [{'element.name': req.body.document.name}],
      new: true,
      upsert: true 
    });
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." }); 
  }
}