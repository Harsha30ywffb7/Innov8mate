import React, { useState } from "react";
import CardsContainer from "./card";
import { useEffect } from "react";
import { resolvePath } from "react-router-dom";



// div buttons
/*
*total on div
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


const IdeasMainpage=()=>{
    const[data, setData ] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await fetch('http://localhost:5000/api',{method:'GET'});
            const json = await response.json();
            console.log(json);
            // Handle JSON data here
        } catch (error) {
            // Handle fetch error
            console.error('Error fetching API:', error);
        }
    }
    
    useEffect(() => {
        fetchApi(); // Call the fetchApi function here
    }, []);
    return(
        <div className="IdeasMainpage">
            <CardsContainer/>
            <div></div>
        </div>
    )
}
export default IdeasMainpage;