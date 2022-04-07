import React from 'react'
import DefaltLayout from '../components/DefaltLayout'

function Login() {
  return (
    <DefaltLayout>
        <div>
            <label>Email</label>
            <input type="email" placeholder='Enter email' required='required' /><br></br>
            <label>Password</label>
            <input type="password" placeholder='Enter password' required='required'/><br></br>
            <button>Sumbit</button>
            <a href=''>Forgot Password</a>
        </div>
    </DefaltLayout>
  )
}

export default Login