
import React, { useState } from "react";
import './../styles/App.css';
// import axios from "axios";

const App = () => {

  const [data, setData] = useState("");

  const api = "https://dummyjson.com/products";

  function fetchAPI(){
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
        <pre>{data}</pre>
    </div>
  )
}

export default App
