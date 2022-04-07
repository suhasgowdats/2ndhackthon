import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DefaltLayout from '../components/DefaltLayout'
import './Bookingitem.css'

function BookingItem() {
    const [info, setInfo]=useState([])
    const nav=useNavigate()

    const {id}=useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        let res=await axios.get(`http://localhost:500/api/items/getitems/${id}`)
        setInfo(res.data)
    }
    console.log(info)


  return (
    <DefaltLayout>
        <div className='full-div'>
           {
               info.map((item)=>{
                   return(
                       <div>
                           <div className='flex-div'>
                           <div className='image-div'>
                           <img src={item.images} alt=''/>
                           </div>
                           <div className='info-div'>
                               <h1>{item.item}</h1>
                               <h3>Brand:{item.brand}</h3>
                               <p>Specifications:{item.specification}</p>
                               <h1>Rent/day:{item.rentperday}</h1>
                               <button className='book-btn'>Book now</button>
                               <button className='book-btn' onClick={()=>nav('/')}>Back</button>
                           </div>
                           </div>
                           <div className='disclames'>
                               <h1>Disclame</h1>
                               <p>products that are rented should to returned within the time and if it is exceeded then there will seperate chsre for the product</p>
                               <p>if the items are damaged then, that will lead to full payment of the item price</p>
                           </div>
                       </div>
                   )
               })
           }
        </div>
    </DefaltLayout>
  )
}

export default BookingItem