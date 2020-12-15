import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import cart from '../../../resources/shopping-bag.png';


export default function NavBar(props) {




    const findQuantity=(arr)=>{
        var total=0;
        
        for(let i=0;i<arr.length;i++){
            // console.log(arr[i])
            total+=arr[i].qty;
        }
        return total;
    }

    const count=findQuantity(props.count);

    return (
        
        <nav>
            <div className="logo">
                Loui-Remouli
            </div>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <Link to="/cart">
                        <img src={cart} /> <span>{count}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
