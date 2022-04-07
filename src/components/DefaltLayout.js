import React from 'react'
import { NavLink } from 'react-router-dom'
import './DefaultLayout.css'

function DefaltLayout(props) {
  return (
    <div>
        <div className='header'>
            <div className='header-flux'>
                <h1>Equipment rentals</h1>
                <NavLink to='/login' className='user-btn'>login</NavLink>
                <NavLink to='/register' className='user-btn'>register</NavLink>
            </div>
        </div>
        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default DefaltLayout