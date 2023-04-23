import { useState} from "react";
import { dataWomenItems } from '../data/dataWomenItems';
import ItemForWomen from "./ItemForwomen";
import Buttons from "./Buttons";


function PageItemsforWomen() {

    const[Item, setItem]= useState(dataWomenItems);
    const chosenItem=(searchTerm)=> {
        const newItem= dataWomenItems.filter(element => element.searchTerm === searchTerm);
        setItem(newItem);
    }
  return (
    <div>  
    <div className="container">
      <Buttons filteredItem={chosenItem}/>
    </div>
      
    <div>
   <ItemForWomen article={Item}/>
    </div>
    </div>
  );
}

export default PageItemsforWomen;