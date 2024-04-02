/* ***IMPORTANT NOTES
 *For in this page.
  *Title
  *description of the idea.
  *Prototype may be video or links.
    *--> Decrease the load own servers user should provide links of the app through thier personal drives links or website links they created.
    *They show the video of the Prototype from thier mail ids directly. redirects mail id or post Video on youtube for decrease load on own servers.
*/
/**
 * *back   title   profile
 * *Problem statement
 * *Approach
 * *uniqueness
 * *Description
 * *Prototype
 * *support type
 * *support button
 */

import React from "react";
import { useParams,Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { useState, useEffect } from "react";
import axios from 'axios'

const IdeaDescription = (props) => {

    const {id} = useParams();
    const [allIdeasData,setAllIdeasData] = useState([]);
    const [resIdea, setresIdea] = useState({});

    useEffect(()=>{
        callAllIdeasApi()
    },[]);

    const callAllIdeasApi =async()=>{
    try {
        const response = await axios.get('http://localhost:5000/ideas/allIdeas');
        setAllIdeasData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    // Use useEffect to find the idea after data is fetched and id is obtained
    useEffect(() => {
        if (allIdeasData.length > 0 && id) {
            const idea = allIdeasData.find(idea => idea._id.toString() === id); // Ensure types match
            console.log(idea); // Use this idea object for your component
            setresIdea(idea);
        }
    }, [allIdeasData, id]); // This effect runs when either allIdeasData or id changes

    return (
        <div className="bg-white-200 my-10 rounded-lg">
            <div className="flex justify-between mx-32">
                <div className="w-10 h-10">
                   <Link to='/pitchideas'>
                   <BiArrowBack />
                   </Link>
                </div>
                <div className="text-xl font-semibold  ">
                    <p>{resIdea.title}</p>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Link to='/profile'>
                    <img src="https://source.unsplash.com/400x400/?man" alt="profile" />
                    </Link>
                </div>
            </div>


            <div className="mx-32 pb-6 my-10 shadow-lg">
                
                <div className="text-md ml-20 mb-10 mr-20  ">
                    <div className="font-bold mb-3">
                        <p>Problem Statement</p>
                    </div>
                    <div className="">
                    {resIdea.problemStatement}
                    </div>
                </div>

                <div className="text-md ml-20 mb-10 mr-20 ">
                    <div className="font-bold mb-3">
                        <p>Uniqueness</p>
                    </div>
                    <div className="unique_content">
                        <p>{resIdea.uniqueness}</p>
                    </div>
                </div>

                <div className="text-md ml-20 mb-10 mr-20 ">
                    <div className="font-bold mb-3">
                        <p>Your Approach</p>
                    </div>
                    <div className="approach_content">
                        <p>{resIdea.approach}</p>
                    </div>
                </div>

                <div className="text-md ml-20 mb-10 mr-20 ">
                    <div className="font-bold mb-3">
                        <p>Description</p>
                    </div>
                    <div className="desc_matter">
                        <p>{resIdea.description}</p>
                    </div>
                </div>

                <div className="text-md ml-20 mb-10 mr-20 ">
                    <div className="font-bold mb-3">
                        <p>Support Type</p>
                    </div>
                    <div className="support_desc">
                        <p>{resIdea.supportType}</p>
                    </div>
                </div>

                <div className="text-md ml-20 mb-10 mr-20 ">
                    <div className="font-bold mb-3">
                        <p>Prototype</p>
                    </div>
                    <div className="prototype_ref">
                        <a href={`${resIdea.prototypeLinks}`} target='_blank' className="text-underline text-orange-600">Click here to view Prototype</a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button 
                    className=" px-2 py-2  rounded-full  bg-orange-500 text-white">Support Idea</button>
                </div>
            </div>

        </div>
    )
};
export default IdeaDescription;