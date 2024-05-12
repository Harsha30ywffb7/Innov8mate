
import Company from "../../models/company-schema.js"
const getCompanies =async(req, res)=>{
    try{
        const companies = await Company.find({});
        //console.log(companies)
        res.status(200).send({companies: companies})
    }catch(error){
        console.log("error ", error);
        res.status(400).send("Internal server error");
    }
}

export default getCompanies;