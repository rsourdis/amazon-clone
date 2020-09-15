import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import '../assets/styles/Components/Login.css'
function Login() {
  const history = useHistory();  
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
          history.push('/')
      })
      .catch(err => alert(err.message));
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(err => alert(err.message));

  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt=""/>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input value={email} type="text" onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
          <button className='login__signInButton' onClick={signIn} type='submit'>Sing In</button>
        </form>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos aut enim adipisci amet assumenda excepturi deleniti consequatur nobis velit harum, reprehenderit debitis aliquid nam perferendis distinctio labore similique repudiandae.</p>

        <button onClick={register} className='login__registerButton'>Creat your Amazon Acount</button>
      </div>
    </div>
  )
}

export default Login
