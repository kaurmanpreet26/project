import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router } from "react-router-dom";
import Schloarship from './Schloarship';

function App(){const myList = ['Undergraduate', 'Post Graduate', 'Doctoral', 'Post Doctoral', 'Other'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;  
     
}); 

    
return (<Router>
    
    <Navbar />
    <div id="a">
    
    <div id ="list1">
     <h3>Level_of_Study</h3>  
    <ul > {listItems} </ul> 
    <h3>Award_Type</h3> 
    <ul>
        <li>Schloarship</li>
        <li>Fellowship</li>
        <li>Grant</li>
        <li>Prize</li>
        <li>Public Grant</li>
    </ul>
    <h3>Where_To_Live</h3> 
    <ul>
        <li>India</li>
        <li>Assam</li>
        <li>Delhi</li>
        <li>Uttar Pradesh</li>
        
    </ul>
    <h3>International</h3> 
    <ul>
        <li>US</li>
        <li>France</li>
        <li>Califonia</li>
        <li>Alaska</li>
        <li>Ohio</li>
    </ul>
    </div>
    <Schloarship />
    </div>
    
</Router>

);
}
export default App;



