import React,{useState} from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart  from './components/Cart/Cart';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  //state contains the items in cart
  let [state, setState] = useState(()=>[]);

  

  //This is to prevent refresh only if using anchor tag for Link tag dont use it
    // document.querySelectorAll("a").forEach(node => {
    //     node.addEventListener('click', e => {
    //       e.preventDefault();
    //       console.log(e.target.href);
    //       //this.props.history.push(e.target.href);
    //     });
    //   })

  //handleSet is a function that adds item to the set
  const handleSet=(item)=>{
    let conf=false;

    if(state.length===0){
      
      item.qty+=1;
      const newstate=[item];
      setState(newstate);
      // console.log(newstate)
      console.log('The length of state is',state)
    }

    else{
      console.log('The length of state is in the else statement',state.length)
       for(let i=0;i<state.length;i++){
        

      //if item already present change the quantity
        if(item.name == state[i].name){
          console.log('The item has entered the loop')
          

            state[i].qty+=1;
            console.log("The quantity is",state[i].qty)
            setState([...state])
            conf=true;
            break;

        }
    }

      //if its a new item add it
      if(conf==false){

        console.log("item has entered new section")
        
          item.qty+=1;

          setState((oldState)=>[...oldState,item]);
          // console.log(state.length)
          
      }
    }

    //Checking whether an item is already present or not
   
    console.log(state)
  }

  const removeItem=(item)=>{
    if(item.qty >1){
      for(let i=0;i<state.length;i++){
        if(item.name===state[i].name){
          state[i].qty-=1;
          setState([...state]);
          console.log("Removed item is",item)
        }
      }
    }
    else if(item.qty==1){

      item.qty-=1

      const newState=state.filter((e)=>{
        
        return e.qty>0
      })
      console.log("Item popped")
      setState([...newState])
    }
  }


  const emptyCart=()=>{
    setState([]);
  }

  return (
    <div className="App">
      {/* {
        array.map((key,value)=>{
        return <li>{value}</li>
        })

      } */}
      <Switch>
        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact}/>
        <Route path="/cart">
          <Cart  myState={state} setFunction={handleSet} remFunction={removeItem} empCart={emptyCart}/>
        </Route>

        <Route path="/" >
          <Home  myState={state} setFunction={handleSet}/>
        </Route>



      </Switch>

    </div>
  )
}
