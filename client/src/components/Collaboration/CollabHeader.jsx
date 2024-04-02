import React from 'react';
import { BiSearch } from 'react-icons/bi'; // Import search icon from react-icons library
import { Link } from 'react-router-dom';

const CollabHeader = () => {
  return (
    <div className="mt-1 py-3 bg-orange-50 flex justify-around items-center mx-5 rounded-md">
      <div className="flex items-center searchInput">
        <div className="relative mr-1">
          <input type="text" placeholder="Search Ideas" className="py-1 px-4 w-48 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-orange-500" />
          <div class="absolute inset-y-0 left-32 flex items-center pl-3">
            <BiSearch class="h-6 w-6 text-gray-400" />
          </div>
        </div>
        <button className='text-white bg-orange-500 py-1 px-2 rounded-md'>Search</button>
      </div>

      <div className="addIdea">
        <Link to='/collaboration/postidea'>
          <button className='rounded-lg bg-black text-white px-2 py-1'>+ Add Idea</button>
        </Link>
      </div>
      <div className="dropdown">
    <label className="text-gray-700">
        Sort by :
        <select className="border border-gray-300 rounded-md px-3 py-1 ml-1 focus:outline-none focus:border-orange-500">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
        </select>
    </label>
</div>

      <div className="empty"></div>
    </div>
  );
};

export default CollabHeader;
