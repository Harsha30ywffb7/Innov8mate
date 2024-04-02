
import Idea from "../../models/ideas-schema.js";

const getAllIdeas = async (req, res) => {
    console.log("before try block")
  try {
    const allIdeas = await Idea.find({});
    res.status(200).json(allIdeas);
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getAllIdeas;
