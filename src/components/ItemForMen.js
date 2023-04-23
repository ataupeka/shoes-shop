


function ItemForMen({articleForMen}){
    return(

        <div className="container">
            {articleForMen.map(( elementForMen=> {
                const {id, name,price,image, articleNumber, brand}= elementForMen;
                return(

                    <div className="product-card">
                    <div className="container-item " key={id}> 
                      <div class="images"> <img src={image} /> </div>
                      <div class="slideshow-buttons">
                    <div class="one"></div>
                   <div class="two"></div>
                  <div class="three"></div>
                  <div class="four"></div>
                </div>
               <p class="pick">choose size</p>
               <div class="sizes">

    <div class="size">6</div>
    <div class="size">7</div>
    <div class="size">8</div>
    <div class="size">9</div>
    <div class="size">10</div>
    <div class="size">11</div>
    <div class="size">12</div>
  </div>
  <div class="product-descriprion">
  <p> {name}</p>
    <h1> {brand}</h1>
    <h2> $ {price}</h2> 
    <p class="desc"> Upper: Polyester 100%  </p>
    <p class="desc"> Sole: Thermoplastic rubber 100% </p>
    <p class="desc"> Lining and insole: Cotton 100%</p>
    <p class="desc"> Art. No. {articleNumber}</p>                           
    <div class="buttons">
    <button class="add">Add to Cart</button>
  
    </div>
                    
                  
                    
                    
                    </div>
                  </div>
                  </div>


                )
            }))
            
            }
        </div>

    )
}
export default ItemForMen;