import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router";

function Form(){
  const [data, setData]=useState(null);
  const [print, setPrint]=useState(false);
  const [response, setResponse]=useState([]);
  const [messages, setMessage]=useState(null)
  
  function getData(val){
    setData(val.target.value)
    setPrint(false)
  }

  useEffect( () => {
    loadResponse();
  }, []);
  
  const loadResponse = async() => {

    var text = data
    
    let msg1 = { name: "User", message: text}
    setMessage(msg1)
    console.log(msg1)


    await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({message: text}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => {
        let msg2 = { name: "Serenity", message: response.answer };
        setMessage(msg2)
        console.log(msg2)
      })
    }
  
  return(
    <div>
      {
        print?
        <h1>{data}</h1>
        :null
      }
      {}
      <form method='POST'>
        <input type="text" onChange={getData}/>
        <button onClick={() => setPrint(true)}>Send</button>
      </form>
      
    </div>
  )
}

export default Form;