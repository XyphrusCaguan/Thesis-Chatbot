import React from 'react';
import help from '../images/cup.jpg';
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
        <h4 className='disc2'>This Chatbot is not Accurate and We can't diagnose patients/users.</h4>
      </div>

      <Button/>


    </div>
   
    </div>
    
  </div>
</div>
    );
}

export default Slider;
