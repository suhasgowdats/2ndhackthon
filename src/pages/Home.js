import React, { useEffect,useState } from 'react'
import DefaltLayout from '../components/DefaltLayout'
import axios from 'axios'
import Cards from './Cards'
import './Home.css'


function Home() {
    const [items, setItems]=useState([])
    useEffect(()=>{
       getItemData()
    },[])
  let getItemData=async()=>{
      let data=await axios.get("http://localhost:500/api/items/getitems")
      setItems(data.data)
  }
  console.log(items)

  return (
    <DefaltLayout>
       <Cards items={items}/>       
    </DefaltLayout>
  )
}

export default Home