import React from "react";
import { useState, useEffect, useRef } from 'react';
// import LoremIpsum from 'react-lorem-ipsum';
import Form from "../inc/Form.js";
import Chatbox from '../inc/Chatbox.js'
import {title} from '../inc/Chatbox.js'
import {APIService} from '../inc/APIService';


function Button (props){
    const [articles, setArticles] = useState([]);
    
    const insertedArticle = (article) =>{
        const new_articles = [...articles,article]
        setArticles(new_articles)
    }

    console.log(articles)

    const mystyle = {
        color: "black",
        fontFamily: "Arial"
    };
    return (
    <div>

        <button type="button"  className="btn btn-primary bt-modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Click to chat
  </button>


    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 " id="staticBackdropLabel">Serenity</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            {/*-----------------*/}
            <div className="container shadow-1-strong text-dark " style={{margin:"auto"}}>
        {
            articles.map(post => {
                return (
                    <div key={post.id}>
                        <p className="text-end">{post.input}</p>
                        <p className="text-start">{post.answer}</p>
                    </div>
                )
            })
        }
        </div>

          </div>
          <div className="modal-footer">

            {/*-----------------*/}

          <div style={mystyle} className='buttonForm'>
            <Chatbox insertedArticle={insertedArticle}/>
        </div>


          </div>
        </div>
      </div>
    </div>
        <div>

        </div>
    </div>
    );

}


export default Button;