import React from "react";
import Navbar from "../Home/navbar";
import Card from './hackathonCard';
import HackathonDetails from './hackathonsDetails';
import './styles.css'
/*
 * Design in my mind 
1. navbar as usual 
 two diff divs in a single div i.e is container.
 in container in one left div is for card and other right div is for the details of the card oh hackathon
 * 
 2. 
 */
const UserHackathonPage =()=>{
    return(
        <div className="UserHackathonPage">
            <Navbar/>
            <div className="hackpageheading">
                <p>Code Collaborate Create - Join our Hackathon Revolution</p>
            </div>
            <div className="Hackpage-container">
                <Card/>
                <HackathonDetails/>
            </div>
        </div>
    );
}
export default UserHackathonPage;