import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

export default function Cart(props) {


    const findQuantity=(arr)=>{
        var total=0;

        for(let i=0;i<arr.length;i++){
            // console.log(arr[i])
            total+=arr[i].qty;
        }
        return total;
    }

    const findTotal=(arr)=>{
        var total=0;
        for(let i=0;i<arr.length;i++){
            total+=arr[i].qty*arr[i].price;
        }
        return total;
    }
    

    const count=findQuantity(props.myState);

    const Length=props.myState.length;

    const sumTotal=findTotal(props.myState)+findTotal(props.myState)*0.1;

    return (
        <div className="cart">
            <div className="cart_banner"><h1>Shopping Basket</h1></div>
            <div className="cart_container">
                    <div class="cart_items">
                        <div className="cart_header">
                            You have a total of {count} items and {Length} unique items
                        </div>

                        <div className="cart_headings">
                            <div className="serial_no">Serial no</div>
                            <div className="cart_product">product</div>
                            <div className="quantity">Quantity</div>
                            <div className="descreption">Description</div>
                            <div className="productCost">total price</div>
                        </div>
                        

                        {
                        props.myState.map((item)=>{

                            if(item.qty>0){
                                return (
                                    <div className="cart_item" key={item.name}>
                                        <div className="cart_serial">{props.myState.indexOf(item)+1}</div>
                                        <div className="cart_head">
                                            <img src={item.src} alt="no image"/>
                                        </div>
                                        <div className="cart_metrics">
                                        <div className="btn btn-remove" onClick={e=>props.remFunction(item)}>-</div>
                                        <div className="cart_quantity">
                                            {item.qty}
                                        </div>
                                        <div className="btn btn-add" onClick={e=>props.setFunction(item)}>+</div>
                                        </div>
                                        <div className="cart_desc">
                                            {item.desc}
                                        </div>
                                        <div className="cart_price"> {
                                            item.qty*item.price
                                        }$ </div>

                                    </div>
                                )
                                
                            }
                            
                            
                            })

                        }
                    </div>
                <div class="cart_total"> 
                        
                        <h2>payment Check.</h2>

                        <div className="payment_method">
                            Payment Method
                        </div>
                        <div className="method">
                            <input type="checkbox" name="credit_card" id="credit"/>
                            <i class="far fa-credit-card"></i>
                            <div className="m1">Credit Card</div>
                        </div>
                        <div className="method">
                            <input type="checkbox" name="paypal" id="paypal"/>
                            <i class="fab fa-paypal"></i>
                            <div className="m1">Paypal</div>
                        </div>
                        <div className="total_amount">

                            Items Cost:  {findTotal(props.myState)}$
                        </div>
                        <div className="total_tax">
                            Total tax: 	+ {findTotal(props.myState)*0.1}$
                        </div>
                        <hr/>
                        <div className="complete_amount">
                            Total : {sumTotal}$
                        </div>
                        <div className="btn btn-pay">
                         <Link to="/" onClick={e=>props.empCart()}>Pay {sumTotal}$</Link>   
                        </div>
                
                </div>
            </div>
        </div>
        
    )
}
