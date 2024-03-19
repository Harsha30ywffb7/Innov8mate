import React from 'react';
import { BiSearch } from 'react-icons/bi'; // Import search icon from react-icons library
import { Link } from 'react-router-dom';

const IdeaHeader = () => {
  return (
    <div className="mt-10 py-5 bg-orange-100 flex justify-around mx-5 rounded-md">
      <div className="searchInput">
        <BiSearch className='h-6 w-6 mr-3' />
        <input type="text" placeholder="  Search Ideas" className='py-5 rounded-sm mr-3' />
        <button className='text-white bg-orange-500 py-2 px-1 rounded-md'>Search</button>
      </div>
      <div className="addIdea">
        <Link to='/ideas/postidea'>
          <button className='rounded-lg bg-black text-white px-2 py-1'>+ Add Idea</button>
        </Link>
      </div>
      <div className="dropdown">
        <label>
          Sort by:
          <select>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default IdeaHeader;
