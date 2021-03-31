import React, {useState, useEffect} from  "react";
import axios from 'axios'
import './App.css';
import { Cards } from "./components/cards";
import { Skeleton } from "./components/skeleton";

function App() {
  const [data, setData] =useState('')
  const [loading, setLoading ] = useState(<Skeleton />)

   useEffect(() => {

        setTimeout(() => {
          axios.get("https://cazadescuentos.net/api/discounts?limit=10")
        .then(res => {
            const dt = res.data.data;
            setData(<Cards data={dt} />)
            setLoading('')
            console.log(dt)
        })
        .catch(err => console.error("something went wrong", err))
        }, 2000);
    }, [])



  return (
    <div class="w-60">
            {data}
            {loading}
        </div>
  );
}

export default App;
