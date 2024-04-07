import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Postproject = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        membersNeeded: 1,
        techStack: '',
        location: '',
        duration: '',
        deadline: '',
    });

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();

    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

    const techStackArray = formData.techStack.split(',').map(tech => tech.trim());
    const username = localStorage.getItem("Username");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send formData to backend
       // console.log(username) 
       // console.log(formData, username, formattedDate);
        const response = await axios.post("http://localhost:5000/collaboration/addProject", ({ ...formData, postedBy: username, userUniqueId: username, techStack: techStackArray, postedAt:formattedDate}));

        if(response.status == 200){
            console.log(response.data)
            navigate('/collaboration')
        }
        
        //console.log(response)

    };

    return (
        <div className="shadow-md p-10 max-w-screen-md mx-auto  mt-3  border border-gray-300 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Members Needed</label>
                    <input
                        type="number"
                        name="membersNeeded"
                        value={formData.membersNeeded}
                        onChange={handleChange}
                        placeholder='min 2 numbers needed for collaboaration'
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
                    <input
                        type="text"
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder='online or offline locations'
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                    />
                </div>
                <div className='flex justify-center mt-5'>
                    <button type="submit" className="mx-auto px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Add Project
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Postproject;
