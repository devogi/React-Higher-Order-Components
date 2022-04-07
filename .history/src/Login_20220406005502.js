import React from 'react'

function Login() {
  return (
    <div>
        <input  onChange={(event)=> {
setUserName(event)
        } } />
    </div>
  )
}

export default Login