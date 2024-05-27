import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './inner-pages/Home';
import About from './inner-pages/About';
import Blog from './inner-pages/Blog';



function App(){

    fetch('https://www.colourlovers.com/api/colors/new?format=json').then ((response) =>{
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
    .catch((error) =>{
        console.log(error)
    });


    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
            </Routes>
        </Router>
        
    );
};


export default App;
