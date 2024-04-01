import Company from '../../models/company-schema.js'
import User from '../../models/user-schema.js';

const addCompany =async(req, res)=>{
    try {
      console.log("try is working")
        const newCompany = new Company({
          ...req.body // Spread the body data into the new Company model
        });

        const userid = newCompany.userUniqueId;
        console.log(userid);
        await newCompany.save()


       console.log("data is saved")
       // Update the user's document to include the new idea in their ideasList

       const user = await User.findOne({ username: userid });

    //    const user = await User.findOneAndUpdate(
    //     { username: userUniqueId }, // Find the user by their username
    //     { $push: { companyList: { company: newCompany._id, founded: true, invested: false } } }, // Push the new idea to the ideaList with owner set to true
    //     { new: true } // Return the updated document after the update
    // );
    console.log('User updated:', user);

    if (user) {
      // Update the companyList array
      user.companyList.push({ company: newCompany._id, founded: true, invested: false });
  
      // Save the updated user document
      await user.save();
  
      console.log('User updated:', user);
  } else {
      console.error('User not found');
  }
    
    // Save the updated user document
      res.status(200).send({message:"Company added sucessfully", Company: newCompany, User: user});
      console.log(user);
      } catch (error) {
        res.status(400).send(error); // Send an error if something goes wrong
      }
}

export default addCompany