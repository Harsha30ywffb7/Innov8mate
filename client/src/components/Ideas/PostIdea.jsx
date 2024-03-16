import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import './styles.css';
// Import CSS file
/***
 * *From here data has to add to the databases.
 */

const IdeaPostingPage = () => {
    return (
        <div className="PostIdea_container">
            <div className="PostIdea_header">
                <div className="back_button">
                    <BiArrowBack />
                </div>
                <div className="PostIdea-profile">
                    <img src="https://source.unsplash.com/400x400/?man" alt="profile" />
                </div>
            </div>
            <p className='text-bold mb-10 text-2xl text-center'>post your idea here</p>
            <p className='star_text'>(*Drag vertically to increase text area.)</p>
            <div className="form_section">
                <div className="form_group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>

                <div className="form_group">
                    <label htmlFor="problemStatement">Problem Statement</label>
                    <textarea id="problemStatement" name="problemStatement"></textarea>
                </div>

                <div className="form_group">
                    <label htmlFor="approach">Approach</label>
                    <textarea id="approach" name="approach"></textarea>
                </div>

                <div className="form_group">
                    <label htmlFor="uniqueIdea">Unique Idea</label>
                    <textarea id="uniqueIdea" name="uniqueIdea"></textarea>
                </div>

                <div className="form_group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description"></textarea>
                </div>

                <div className="form_group">
                    <label htmlFor="impact">Impact</label>
                    <textarea id="impact" name="impact"></textarea>
                </div>

                <div className="form_group">
                    <label htmlFor="prototype">Prototype</label>
                    <textarea id="prototype" name="prototype"></textarea>
                </div>

            </div>

            <div className='PostIdea_submit'>
                <button type="submit">Submit Idea</button>
            </div>
        </div>
    );
};

export default IdeaPostingPage;
