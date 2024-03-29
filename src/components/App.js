
// import React, { useState } from "react";
// import './../styles/App.css';
// import axios from "axios";
// // import axios from "axios";

// const App = () => {

//   const [data, setData] = useState("");

//   const api = "https://dummyjson.com/products";

//   function fetchAPI(){
//     fetch(api)
//     .then((response)=>response.json())
//     .then((data)=>{
//       console.log(typeof data);
//       console.log(data);
//       setData(JSON.stringify(data));
//     })
//     .catch((err)=>{
//       console.log(err);
//     });

    
    
//   }

//   useState(()=>{
//     fetchAPI();
//   },[])


//   return (
//     <div>
//         <h1>Data Fetched from API</h1>
//         <pre>{data}</pre>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [apiFetch, setApiFetch] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then((res) => setApiFetch(res.data))
      .catch((err) => setApiFetch(err));
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {console.log(apiFetch)}
      {/* {console.log(apiFetch.products, apiFetch.status)} */}
      {(!apiFetch.code && <pre>{JSON.stringify(apiFetch, null, 2)}</pre>) ||
        "An error occurred: "}
    </div>
  );
};

export default App;