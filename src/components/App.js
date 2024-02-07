
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";
// import axios from "axios";

const App = () => {

  const [data, setData] = useState("");

  const api = "https://dummyjson.com/products";

  async function fetchAPI(){
    fetch(api)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(typeof data);
      console.log(data);
      setData(JSON.stringify(data));
    })
    .catch((err)=>{
      console.log(err);
    });

    
    
  }

  useState(()=>{
    fetchAPI();
  },[])


  return (
    <div>
        <h1>Data Fetched from API</h1>
        <pre>{data}</pre>
    </div>
  )
}

export default App
