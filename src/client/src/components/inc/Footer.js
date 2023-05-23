import React from "react";
import {Link} from 'react-router-dom';


function Footer() {
        return(
            
    <section className="section footer bg-dark text-white h-25">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h6 className="mt-3">
                    About Serenity
                </h6>
                <hr/>
                <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie at elementum eu facilisis sed odio.

                </p>

                </div>
                <div className="col-md-4">
                <h6 className="mt-3">
                    Quick Links
                </h6>
                <hr/>

                <div className=" col-md-4 position-relative">   

                <div className="btn btn-dark">
                <Link to="/" style={{ textDecoration: 'none', color:'white'}}>Home</Link></div>
                <div className="btn btn-dark">
                <Link to="/about" style={{ textDecoration: 'none', color:'white'}}>About</Link></div>
                <div className="btn btn-dark">
                <Link to="/contact" style={{ textDecoration: 'none', color:'white' }}>Contact</Link></div>
                </div>

                </div>
                <div className="col-md-4">
                <h6 className="mt-3">Support Us?</h6>
                <hr/>
                <div className="mx-lg-3"><p className="text-white mb-1">Patreon</p></div>
                <div className="mx-lg-3"><p className="text-white mb-1">Gcash</p></div>
                <div className="mx-lg-3"><p className="text-white mb-1">Paymaya</p></div>
                <div className="mx-lg-3"><p className="text-white mb-1">Paypal</p></div>

                </div>

            </div>

        </div>
    </section>
    
    
        );
        
}
export default Footer;

