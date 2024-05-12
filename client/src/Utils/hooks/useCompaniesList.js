import { useState,useEffect } from "react"
import axios from 'axios'
 
 const useCompanies =()=>{
    const [allcompanies, setAllCompanies] = useState([])

    const getCompanies = async () => {
        const response = await axios.get("http://localhost:5000/funding/");
        setAllCompanies(response?.data?.companies)
    }
    useEffect(() => {
        getCompanies()
    }, [])
    
    return allcompanies
 }

 export default useCompanies;