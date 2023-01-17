import React from 'react';
import help from '../images/swissnat.jpeg';
import Button from '../inc/Button.js'
import Chatbox from '../inc/Chatbox.js';

function Slider() {
    return (
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'100px'}}src={help} className="d-block min-vh-100 w-100" alt="..."/>
      <div className="carousel-caption min-vh-100 ">
   
      {/*Disclaimer */}
      <div className='disc'>
        
     <p className="disc1"> Disclaimer: </p>
        <h4 className='disc2 h2'>
        This website is not a licensed medical care provider and is not intended to diagnose, treat, or manage any medical condition or illness. If you have any questions or concerns about your health or condition, always consult a healthcare professional.
        </h4>
      </div>

      <Button/>


    </div>
   
    </div>
    
  </div>
</div>
    );
}

export default Slider;
