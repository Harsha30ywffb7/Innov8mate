import React from "react";
import '../Hackathons/styles.css';
const data = []
/*
for tags I create another components where tags are stored here.
as per user selection tags should as dynamically in the tags component we written.
 1. Basically as per my assumption tags are stored in Array and later they will map with the components of tags using props.
*/
const Card =()=>{
    return (
        <div className="card">
            <div className="mainlogo">
                <div className="hack-logo">
                    <img src="" alt="Hack-logo" />
                </div>
                <div className="hackathon">
                    <p className="name">
                        sde hackathon
                    </p>
                    <p className="organisation">
                        Anits college
                    </p>
                </div>
            </div>
            <div className="tag-container">
                <Tags tag="Coding"/>
                <Tags tag="Coding"/>
            </div>

            <div className="entities">
            <p className="mode"><span>Mode:</span>{"Online"}</p>
                <p className="Registrations"><span>Registrations:</span>{245}</p>
                <p className="deadline"><span>Deadline:</span>30 days left</p>
                <p className="prize"><span>prize:</span>Rs.10000</p>
            </div>
        </div>
    )
};


const Tags =(props)=>{
    return(
        <div className="tag-body">
            <p>{props.tag}</p>
        </div>
    )
}
export default Card;