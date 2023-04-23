import { useState} from "react";
import { dataManItems } from '../data/dataManItems';
import ItemForMen from "./ItemForMen";
import Buttons from "./Buttons";





function PageItemsForMen() {

    const[ItemTwo, setItemTwo]= useState(dataManItems);
    const chosenItemTwo=(searchTerm)=> {
        const newItemTwo= dataManItems.filter(elementForMen => elementForMen.searchTerm === searchTerm);
        setItemTwo(newItemTwo);
    }
  return (
    <div>  
    <div className="container">
      <Buttons filteredItem={chosenItemTwo}/>
    </div>
      
    <div>
   <ItemForMen articleForMen={ItemTwo}/>
    </div>
    </div>
  );
}

export default PageItemsForMen;