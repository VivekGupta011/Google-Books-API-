import React ,{useState}from "react";
import Card from "./Card";
import Liblogo from './library.png';
import {Footer} from './Footer';
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(event)=>{
        if(event.key==="Enter")
        {
            let letters = /^[A-Za-z]+$/;
            if(search ==="" || letters.test(search)){
                axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
            }else{
                alert("Ensure you are only using alphabets!");
            }
        }
    }
    return(
        <>
            <div className="header">
                <div className="Navbar">
                    <img src={Liblogo} style={{width:130,position:'absolute',top:10}}/>
                    <ul className="Navitem">
                        <li></li>
                    </ul>
                </div>
                <div className="row1">
                   
                    <h1 className='customHeading'>The more you read, the smarter you’ll be!</h1>
                    <h1 className='customHeading'>Books are the ultimate window to other worlds and times.</h1>
                </div>
                <div className="row2">
                   
                    
                    <h2 style={{fontFamily:'cursive'}}>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button onClick={searchBook}><i className="fas fa-search"></i></button>
                    </div>
                    
                </div>
            </div>
            
            <h2 className="result"> Your Data Section:-</h2>

                

            <div className="container">
                
              {
                    
                    <Card book={bookData}/>
              }  
            </div>
            <Footer />
        </>
    )
}
export default Main;