import React from 'react'
import DefaltLayout from '../components/DefaltLayout'

function Register() {
  return (
    <DefaltLayout>
         <div>
             <label>Name</label>
             <input type="text" placeholder='Enter name' required='required' /><br></br>
             <label>Email</label>
            <input type="email" placeholder='Enter email' required='required' /><br></br>
            <label>Enter Address</label>
            <input type="text" placeholder='Enter address' required='required' /><br></br>
            <label>SetPasssword</label>
            <input type="password" placeholder='Set password' required='required'/><br></br>
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' required='required'/><br></br>
            <button>Create Acc</button>
        </div>
    </DefaltLayout>
  )
}

export default Register