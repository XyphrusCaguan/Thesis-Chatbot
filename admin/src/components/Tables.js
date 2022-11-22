import React from 'react';
import { useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';


function Tables() {
	const [data, setData] = useState([]);
	useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://127.0.0.1:5000/reports')
      response = await response.json()
      setData(response)
    }
    fetchMyAPI()
  }, [])
  console.log(data)
  return (
    <Table mb-2 p-3 stripped bordered hover variant="dark" w-25 min-vw-100>
      <thead>
        <tr>
          <th>User</th>
          <th>User Input</th>
          <th>Chatbot Response</th>
        </tr>
      </thead>
      <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.user}</td>
                <td>{val.input}</td>
                <td>{val.answer}</td>
              </tr>
            )
          })}
      </tbody>
      </Table>
  ); 
}

export default Tables;
