import React from "react";
import CardsContainer from "./card";
import IdeaHeader from './Header';



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
    return (
        <div className="IdeasMainpage">
            <IdeaHeader />
            <CardsContainer />
            <div></div>
        </div>
    )
}
export default IdeasMainpage;