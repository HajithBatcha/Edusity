import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Hero from "./Hero/Hero.js";
import Programs from "./Programs/Programs.js";
import Title from "./Title/Title.js";
import About from "./About/About.js";
import Campus from "./Campus/Campus.js";
import Testimonials from "./Testimonials/Testimonials.js";
import Contact from "./Contact/Contact.js";
import Footer from "./Footer/Footer.js";
function Home(){
   return(
   <div>
         <Navbar></Navbar>
         <Hero></Hero>

         <div className="container">
            <Title subTitle="our program" Title="What We Offer"/>
            <Programs ></Programs>
             <About></About>
             <Title subTitle="Gallery" Title="Campus Photos"/>
             <Campus></Campus>
              <Title subTitle="Testimonials" Title="What Student Says"/>
             <Testimonials></Testimonials>
            <Title subTitle="Contact Us" Title="Get In Touch"/>
            <Contact/>
            <Footer/>


         </div>
        


   </div>
);
}
export default Home