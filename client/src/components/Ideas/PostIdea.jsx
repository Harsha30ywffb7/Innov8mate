import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

const IdeaPostingPage = () => {
    return (
        <div className="bg-white-200 my-6">
            <div className="flex justify-between mx-32">
                <div className="w-10 h-10 cursor-pointer">
                    <BiArrowBack />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="https://source.unsplash.com/400x400/?man" alt="profile" />
                </div>
            </div>
            <div className='mt-2 w-8/12 mx-auto bg-white pl-10 pr-24 rounded-lg shadow-md'>
                <p className='text-bold mb-10 text-2xl text-center'>Post Your Idea Here</p>
                <p className='text-xs'>(*Drag vertically to increase text area.)</p>
                <div className="my-4">

                    <div className="mt-3 mb-6">
                        <label htmlFor="title" className='block text-md font-medium text-gray-900'>Title</label>
                        <input type="text" id="title" name="title" className="mt-2 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" />
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="problemStatement" className='block text-md font-medium text-gray-900'>Problem Statement</label>
                        <textarea id="problemStatement" name="problemStatement" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="approach" className='block text-md font-medium text-gray-900'>Approach</label>
                        <textarea id="approach" name="approach" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="uniqueIdea" className='block text-md font-medium text-gray-900'>Unique Idea</label>
                        <textarea id="uniqueIdea" name="uniqueIdea" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="description" className='block text-md font-medium text-gray-900'>Description</label>
                        <textarea id="description" name="description" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="impact" className='block text-md font-medium text-gray-900'>Impact</label>
                        <textarea id="impact" name="impact" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                    <div className="mt-3 mb-6">
                        <label htmlFor="prototype" className='block text-md font-medium text-gray-900'>Prototype</label>
                        <textarea id="prototype" name="prototype" className="mt-3 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"></textarea>
                    </div>

                </div>

                <div className=" text-center px-4 py-2 rounded-md shadow-sm text-sm font-medium ">
                    <button type="submit" className='w-32 h-10 font-bold mb-4 text-white bg-orange-500 hover:bg-orange-700 rounded-lg'>Submit Idea</button>
                </div>
            </div>
        </div>
    );
};

export default IdeaPostingPage;
