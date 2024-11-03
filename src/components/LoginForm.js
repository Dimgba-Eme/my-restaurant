import React from 'react'

function LoginForm() {
  return (
    <>
     <form>
        <fieldset>
            <h1>Login</h1>
            <label htmlFor='email'>Email <sup>*</sup></label>
            <br />
            <input type='email' placeholder='Enter your email' id='email' />
            <br />

            <label htmlFor='pwd'>Password <sup>*</sup></label>
            <br />
            <input type='password' placeholder='Enter your password' id='pwd' />
        </fieldset>
    </form> 
    </>
  )
}

export default LoginForm
