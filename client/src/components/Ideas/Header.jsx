import React from 'react';
import { BiSearch } from 'react-icons/bi'; // Import search icon from react-icons library

const IdeaHeader = () => {
  return (
    <div className="ideaHeader">
      <div className="searchInput">
        <BiSearch />
        <input type="text" placeholder="Search Ideas" />
      </div>
      <div className="addIdea">
        <button className='add-btn'>+ Add Idea</button>
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
