import { useEffect, useState } from "react";
import axios from 'axios';


const useProjectList =()=>{
    const [allProjects, setAllProjects] = useState([]);
    useEffect(() => {
        const getAllProjectsApi = async () => {
            try {
                const response = await axios.get("http://localhost:5000/collaboration/");
                //console.log(response);
                setAllProjects(response.data.projects); // Adjust according to your API response structure
                //console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        getAllProjectsApi();
    }, []);

    return allProjects;
}

export default useProjectList;