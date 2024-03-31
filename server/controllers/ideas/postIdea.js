import Idea from '../../models/ideas-schema.js'
import User from '../../models/user-schema.js';

const postIdea =async (req, res)=>{
    // res.send("you can post your idea here");
    
    try{
        console.log("try is working")
        const { title, problemStatement, userUniqueId, impact, uniqueness, owner, supporter, approach, description, supportType, prototypeLinks, likes } = req.body;

        //console.log(userUniqueId);

    // Create a new idea document using the Idea model
    const newIdea = new Idea({
        title,
        problemStatement,
        userUniqueId,
        impact,
        uniqueness,
        owner,
        supporter,
        approach,
        description,
        supportType,
        prototypeLinks,
        likes
      });

      await newIdea.save()
       
       // Update the user's document to include the new idea in their ideasList
       const user = await User.findOneAndUpdate(
        { username: userUniqueId }, // Find the user by their username
        { $push: { ideaList: { idea: newIdea._id, owner: true, supporter: false } } }, // Push the new idea to the ideaList with owner set to true
        { new: true } // Return the updated document after the update
    );

    console.log('User updated:', user);
    
    // Save the updated user document
     await user.save();
      res.status(200).send({message:"Idea added sucessfully", Idea: newIdea});
    }
    catch(error){
        console.log("catch is working")
        console.error('Error adding idea:', error);
        res.status(500).send({error:"Internal server error"});
    }
}

export default postIdea;