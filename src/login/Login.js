import React,{useState} from 'react'
import './login.css'
import Signup from '../components/Signup.js';
function Login() {
  const [signIn,setSignIn] = useState(false);
  return (
    <div className='login'>
      
      <div className='login_background'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158' alt='login_netflix_logo'/>
        <button className='login_signin_btn' onClick={()=>setSignIn(true)}>Sign In</button>
        <div className='login_gradient'/>
      </div>

     <div className='login_body'>
      {signIn ? (<Signup/>):(<>
          <h1>
            Unlimited films, TV programmes and more.
          </h1>
          <h2>Watch anywhere.Cancel at any time.</h2>
          <h3>
            Ready to watch?Enter your email to create or restart your membership.
          </h3>
          <div className='login_input_mail'>
            <form>
              <input type='email' placeholder='Email Address'/>
            <button className='login_getStarted' onClick={()=>setSignIn(true)}>GET STARTED </button>
            </form>

          </div>
          </>)}
          
      
      </div> 
    </div>
  )
}

export default Login