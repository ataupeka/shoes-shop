function Buttons({filteredItem}){
    return(
<div className="container">
<button className='btn' onClick={() => filteredItem ("boots")}> Boots </button>
<button className="btn" onClick={() => filteredItem ("shoes")}> Shoes </button>
<button  className="btn"onClick={() => filteredItem ("sport")}> Sport shoes </button>



</div>
)
}

export default Buttons;
