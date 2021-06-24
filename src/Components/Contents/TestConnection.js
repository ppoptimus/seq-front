import React, {useState} from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [res, setRes] = useState();
    const check = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000'
          })
            .then(response => {
              const result = response.data;
              setRes(JSON.stringify(result))
              console.log(res)
            })
            .catch(err => {
              console.error(err)
            })
    }
    return (
        <div>
            <button onClick={check}>Test</button>
            <span></span>
        </div>
    );
}

export default TestConnection;
