import React, {useState, useEffect} from  "react";
import axios from 'axios'
import './App.css';
import { Cards } from "./components/cards";

function App() {
  const [data, setData] =useState('')

   useEffect(() => {
        axios.get("https://cazadescuentos.net/api/discounts?limit=10")
        .then(res => {
            const dt = res.data.data;
            setData(<Cards data={dt} />)
            console.log(dt)
        })
        .catch(err => console.error("something went wrong", err))
    }, [])



  return (
    <div class="w-60">
        <div className="text-center">Project 001</div>
            {data}
        </div>
  );
}

export default App;
