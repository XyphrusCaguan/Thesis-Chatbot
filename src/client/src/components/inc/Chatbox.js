import { useState, useEffect, useImperativeHandle } from 'react';
import APIService from '../inc/APIService';
import Button from '../inc/Button.js'
import '../styles/chatbox.css';

const Chatbox = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');

  const insertArticle = () =>{
    APIService.InsertArticle({title,body})
    .then((response) => props.insertedArticle(response))
    .catch(error => console.log('error',error))
  }

  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertArticle()
    setTitle(title)
    setBody('')
  }

  return (
    <div className='container'>
    <form onSubmit = {handleSubmit} >
        {/*<label htmlFor="title" className="form-label">Chat will appear at Here</label>*/}
        <input 
        type="text"
        className="form-control" 
        placeholder ="Please Enter your Name"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required
        />

        <label htmlFor="body" className="form-label"></label>
        <input 
          type="text"
          className="form-control" 
          placeholder ="Chat Here"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
          />

        <button 
        className="btn btn-primary mt-2" style={{marginLeft:"150px"}}
        >
        Send</button>

    </form>
    </div>
  )}

export default Chatbox;