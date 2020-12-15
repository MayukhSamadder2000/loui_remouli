import React,{useState} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export default function Home(props) {
    
    return (
        <div>
            {
                // passing the previous state and the change handeling function
            }
           
            <Header grr={props.myState} getChanged={props.setFunction}/>
            <Main grr={props.myState} getChanged={props.setFunction} />
            <Footer/>
        </div>
    )
}
