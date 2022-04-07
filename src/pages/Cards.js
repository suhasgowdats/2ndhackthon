import React from 'react'
import './card.css'
import {NavLink} from 'react-router-dom'

function Cards({items}) {
  return (
    <div className='newdiv'>
        {
            items.map((item,i)=>{
                return(
                    <div key={i}  className='card'>
                       <img src={item.images} alt=''/>
                       <div className='card-info'>
                           <h1>{item.item}</h1>
                           {/* <p>{}</p> */}
                           <h3>Rent/day:{item.rentperday}</h3>
                           <NavLink to={`/bookingItems/${item.id}`}><button className='cart-btn' >Add To Cart</button></NavLink>
                       </div>
                    </div>                  
                )
            })
        }
    </div>
  )
}

export default Cards