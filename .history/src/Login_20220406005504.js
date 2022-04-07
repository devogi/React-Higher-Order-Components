import React from 'react'

function Login() {
  return (
    <div>
        <input  onChange={(event)=> {
setUserName(event.target)
        } } />
    </div>
  )
}

export default Login