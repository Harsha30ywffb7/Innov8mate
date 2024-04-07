import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import SuccessAnimation from '../../Common/successMessage';
SuccessAnimation

const IdeaPostingPage = () => {


    const navigate = useNavigate();
    const[postData, setPostData] = useState(
        {
            title:'',
            problemStatement: "",
            impact: "",
            uniqueness: "",
            owner: true,
            supporter: false,
            approach: "",
            description: "",
            supportType: '',
          //  prototypeLinks: '',
            likes: 0
        }
    );

    const userId = localStorage.getItem('Username')
    //console.log(userId)
    const [prototypeLinks,setprototypeLinks] = useState('');

    const handlePostIdea = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/ideas/postidea', {userUniqueId:userId,...postData, prototypeLinks});
           
            console.log(response.data); // Log the response data
            // Add logic to update user's idea list with the new idea ID

            navigate('/pitchideas')

        } catch (error) {
            console.error('Error posting idea:', error);
        }
    };

   console.log(postData)

    return (
        <div className="bg-white-200 my-6">
            
            <div className='mt-2 w-8/12 mx-auto bg-white pl-10 pr-24 rounded-lg shadow-md'>
                <p className='text-bold mb-10 text-2xl text-center'>Post Your Idea Here</p>
                <p className='text-xs'>(*Drag vertically to increase text area.)</p>
                <div className="my-4">

                    <div className="mt-3 mb-6">
                        <label htmlFor="title" className='block text-md font-medium text-gray-900'>Title</label>
                        <input 
                        value={postData.title} 
                        onChange={(e)=>setPostData({...postData, title:e.target.value})}
                        type="text" id="title" name="title" className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="problemStatement" className='block text-md font-medium text-gray-900'>Problem Statement</label>
                        <textarea 
                        value={postData.problemStatement} 
                        onChange={(e)=>setPostData({...postData, problemStatement:e.target.value})}
                        
                        id="problemStatement" name="problemStatement" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="approach" className='block text-md font-medium text-gray-900'>Approach</label>
                        <textarea 
                        value={postData.approach} 
                        onChange={(e)=>setPostData({...postData, approach:e.target.value})}
                        id="approach" name="approach" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="uniqueIdea" className='block text-md font-medium text-gray-900'>Unique Idea</label>
                        <textarea 
                        value={postData.uniqueness} 
                        onChange={(e)=>setPostData({...postData, uniqueness:e.target.value})}
                        id="uniqueIdea" name="uniqueIdea" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="description" className='block text-md font-medium text-gray-900'>Description</label>
                        <textarea 
                        value={postData.description} 
                        onChange={(e)=>setPostData({...postData, description:e.target.value})}
                        id="description" name="description" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="impact" className='block text-md font-medium text-gray-900'>Impact</label>
                        <textarea 
                        value={postData.impact} 
                        onChange={(e)=>setPostData({...postData, impact:e.target.value})}
                        id="impact" name="impact" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="impact" className='block text-md font-medium text-gray-900'>Support Type</label>
                        <textarea 
                        value={postData.supportType} 
                        onChange={(e)=>setPostData({...postData, supportType:e.target.value})}
                        id="impact" name="impact" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="prototype" className='block text-md font-medium text-gray-900'>Prototype</label>
                        <textarea 
                         value={prototypeLinks} 
                        onChange={(e)=>setprototypeLinks(e.target.value)}
                        id="prototype" name="prototype" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                </div>

                <div className=" text-center px-4 py-2 rounded-md shadow-sm text-sm font-medium ">
                    <button onClick={handlePostIdea}
                    type="submit" className='w-32 h-10 font-bold mb-4 text-white bg-orange-500 hover:bg-orange-700 rounded-lg'>Submit Idea</button>
                </div>
            </div>
        </div>
    );
};

export default IdeaPostingPage;
