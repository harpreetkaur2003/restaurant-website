import React from 'react';
import '../Base/Body.css';
import res1 from '../Images/rest1.jpg'
import rest0 from '../Images/rest0.png'
import res1Image from '../Images/res1.png'
import res2Image from '../Images/res2.png'
import res3Image from '../Images/res3.png'
import res4Image from '../Images/res4.png'
import res5Image from '../Images/res5.png'
import res6Image from '../Images/res6.png'
import res7Image from '../Images/res7.png'
import res8Image from '../Images/res8.png'
import res9Image from '../Images/res9.png'
import { Link } from "react-router-dom";
function Body() {
  return (
    <>
    <div className="App">
      <nav>
      <ul>
        <div className="logo">
      <div className="logo-image">
        <img src={res1} alt=""/>
        </div>
      </div>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
        <li><a href="/">Harry</a></li>
        <li><a href="/cuisine">Cuisine</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
        <li><a href="/about us">About us</a></li>
      </ul>
    </nav>
      <header className="App-header">
        <h1>Welcome to Bon Appétit</h1>
      </header>
      <div class="side">
      <img src={rest0} alt=""/>
      </div>
      <h2>Step into the enchanting world of Bon Appétit, a distinguished restaurant where gastronomic delights and unforgettable experiences await. With an ambiance that seamlessly blends sophistication and warmth,Bon Appétit sets the stage for an extraordinary dining affair.</h2><br />
      <h5>
      "Indulge in Culinary Delights, Elevate Your Senses at <br />Bon Appétit."
      </h5>
      <br />
      <br />
      <br />
      <br />
      <br />  
      <br />   
      <br />
    </div>
         <div class="card-container">
         <div class="flip-btm">
         <div class="img1">
           <img src={res1Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Barbecue<br />
                Location: Sadar<br />
                Cuisine:Indian, Barbecue,Asian<br /> 
                Signature Dish: Butter-Chicken,Kebabs<br />
                Ratings:4.5</h4>
           </div>
           <Link to="/menu"><button>Visit</button></Link>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res9Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Ru-oo-fh 180<br />
                    Location: Ramdaspeth<br />
                    Cuisine:Indian, Barbecue,Pub,Asian <br />
                    Signature Dish:Indonesian spicy rice, cocktail<br />
                    Ratings:4.7</h4>
           </div>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res2Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Nanking<br />
       Location: Civil Lines<br />
       Cuisine: Chinese,Asian <br />
       Signature dish: Veg Manchurian,Chicken Wings<br />
       Ratings:4.2</h4>
           </div>
         </div><br />
         
         <div class="flip-btm">
         <div class="img2">
           <img src={res6Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Pablo-The Art Cafe Lounge<br />
       Location: Civil lines<br />
       Cuisine:Cafe,Bar,Pub<br />
       Signature dish:Teriyaki Chicken, Veg Tapas platter<br />
       Ratings:4.5</h4>
           </div>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res3Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Haldiram-Planet Food <br />
       Location: Dharampeth <br />
       Cuisine:Indian,Asian,International <br />
       Signature dish: Raj kachori,Chole Bhature<br />
       Ratings:4.7</h4>
           </div>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res8Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Fountain Sizzlers and Bistro<br />
       Location: Dhantoli<br />
       Cuisine:Indian,Asian <br />
       Signature dish: Burmese know Suey<br />
       Ratings:4.8</h4>
           </div>
         </div><br />
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res4Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Gokul Brindavan<br />
       Location: Dharampeth <br />
       Cuisine:Indian,Asian <br />
       Signature dish: Masala Dosa,Filter Coffee<br />
       Ratings:4.6</h4>
           </div>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res7Image} alt=""/>
            </div>
           <div class="flipBtmDiv">
               <h4>Name : Tao-Asian Kitchen <br />
       Location: Civil lines<br />
       Cuisine: Mediterranean <br />
       Signature dish: Dimsum Platter,Sushi<br />
       Ratings:4.8</h4>
           </div>
         </div>
       
         <div class="flip-btm">
         <div class="img2">
           <img src={res5Image} alt=""/>
            </div>
            
           <div class="flipBtmDiv">
               <h4>Name : High Steaks-pool Side<br />
       Location: Ramdaspeth <br />
       Cuisine:Indian,Asian,Continental <br />
       Signature dish: Cancun Grilled Prawns, High Steaks Chicken<br />
       Ratings:4.9`</h4>
       
           </div>
           <button>Visit</button>
         </div>
       </div>
       </>
  );
}

export default Body;