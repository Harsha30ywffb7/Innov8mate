import React, { useEffect, useState } from "react";
import CardsContainer from "./card";
import IdeaHeader from './Header';
import axios from 'axios';



//
/*total on div
    *Navbar
    * buttons div
        *Add idea button navigate.
        *search
        * if filter then add filters and end and or operation to data . data where tags contains the filters they should return that's the main use.
    * Cards div --- Main div in this 
        * cards in grid.
            *Profile username
            *title
            *description
            *like share comment
    
* one laptops grid 2 cols 
* for mobile one col each div.
*/


const IdeasMainpage = () => {
    const [allIdeasData,setAllIdeasData] = useState([]);
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
    return (
        <div className="IdeasMainpage">
            <IdeaHeader />
            <CardsContainer allIdeasData={allIdeasData}/>
        </div>
    )
}
export default IdeasMainpage;