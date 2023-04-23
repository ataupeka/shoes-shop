import React from "react";

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


import PageOne from "./components/PageOne";
import PageItemsForMen from "./components/PageItemsForMen";
import PageItemsforWomen from "./components/PageItemsForWomen";
import Footer from "./components/Footer";




import './App.css';





function App() {

  return(
    <div>  
  <Router> 
 <nav>
 <Link className="navLink" to="/home_page"> Home Page </Link>
  <Link className="navLink" to="/items_for_women"> Femme </Link>
  <Link className="navLink" to="/items_for_men"> Homme </Link>
  
</nav>

<Routes>
<Route path="/home_page" element={<PageOne/>}/>
<Route path="/items_for_women" element={<PageItemsforWomen/>}/>
<Route path="/items_for_men" element={<PageItemsForMen/>}/>


</Routes>

 </Router>
 <Footer/>

 </div>



  ); 
 


}
export default App;
