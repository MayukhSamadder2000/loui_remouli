import React,{useState} from 'react';
import './Main.css';


var arr=require('../../resource');

function Main(props) {

    
    
    const addItemInCart=(item)=>{
        props.getChanged(item);

    }
     



    

    return (
        
        <main>
            
            <section className="cards">
                <div className="row">
                    <div className="card">
                        <div className="card_top">
                            <i class="fas fa-leaf"></i>
                            <h3>Only Natural</h3>
                        </div>
                        <div className="card_bottom">
                             We have been decorated with
                            <br/> 
                             various national 
                            and inter national awards  <br/>
                            for  our
                            <br/>
                            performances as a perfume manufacturer 
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_top">
                            <i class="far fa-star"></i>
                            <h3>Premium quality</h3>
                        </div>
                        <div className="card_bottom">
                             We have been decorated with
                            <br/> 
                             various national 
                            and inter national awards  <br/>
                            for  our
                            <br/>
                            performances as a perfume manufacturer 
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_top">
                            <i class="far fa-play-circle"></i>
                            <h3>Award winning</h3>
                        </div>
                        <div className="card_bottom">
                            We have been decorated with
                            <br/> 
                             various national 
                            and inter national awards  <br/>
                            for  our
                            <br/>
                            performances as a perfume manufacturer 

                        </div>
                    </div>
                </div>
            </section>
            <section className="products">
                <div className="title">
                    <span>Our Shop</span> 
                    <div>Our Products</div>
                    
                </div>
            <div className="product_list" id="shop">


            {

                arr.items.map((item)=>{
                    return (
                        <div className="product" key={item.name}>
                            <div className="product_top">
                                <img src={item.src} alt="No image"/>
                            </div>
                            <div className="product_bottom">
                                <div className="price">
                                    {item.price}$
                                </div>
                                <div className="product_name">
                                    {item.name}
                                </div>
                                <div className="product_function">
                                    <li onClick={e=>addItemInCart(item)}>Add</li>
                                    <li>Item desc</li>
                                    <li>Report</li>
                                </div>
                            </div>
                         </div>
                    )
                })


            }

                {/* <div className="product">
                    <div className="product_top">
                        <img src={arr.items[0].src} alt="No image"/>
                    </div>
                    <div className="product_bottom">
                        Hi i am bottom
                    </div>
                </div> */}
            </div>

            </section>

            <section className="reviews">
                <div className="review_head">
                    Our reviews
                </div>
                <div className="review_content">

                    <div className="review">
                    <h2>Sana Adams</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Quam cumque consectetur iste, 
                        sunt ipsam praesentium aspernatur  <br/>necessitatibus incidunt? Numquam, eveniet!</p>
                     </div>
                    <div className="review">
                    <h2>loui rovulte</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Quam cumque consectetur iste, 
                        sunt ipsam praesentium aspernatur  <br/>necessitatibus incidunt? Numquam, eveniet!</p>
                    </div>
                    <div className="review">
                    <h2>karmila Darkula</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Quam cumque consectetur iste, 
                        sunt ipsam praesentium aspernatur  <br/>necessitatibus incidunt? Numquam, eveniet!</p>
                    </div>
                </div>
                
            </section>

        </main>

    )
}
export default Main;
// const countState=()=>{
//         var myTotal=0;
//         for(let i=0;i<myCart.length;i++){
//             myTotal+=myCart[i].qty;
//         }
//         return myTotal
//     }