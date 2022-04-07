import React from 'react'

function Login() {
  return (
    <div>
        <input  onChange={(event)=> {
setUserName(event.t)
        } } />
    </div>
  )
}

export default Login