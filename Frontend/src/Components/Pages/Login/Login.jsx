import React from 'react'
import './Login.css'
import {useState} from 'react'
import {login, signup} from '../../../firebase'
import Header from '../../Header/Header'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user_auth = async (event) =>{
  
    event.preventDefault();
    if(signState === "Sign In"){
      await login(email, password).then(() => {
        navigate('/admin');
      });
    }
    else{
      await signup(name, email, password).then( () => {
        setSignState("Sign In");
      });
    }
  }

  return (
    <>
      <Header />
      <div className='login'>
          <div className='login-form'>
            <h1>{signState}</h1>
            <form>
              {signState ==="Sign Up" ? 
                <input 
                  value={name} 
                  onChange={
                    (e) =>{setName(e.target.value)}
                  } 
                  type='text' 
                  placeholder='Your name'
                /> : <></>
              }
              
              <input 
                type='email' 
                placeholder='Email'
                value={email}
                onChange={
                  (e)=>{setEmail(e.target.value)}
                }
              />
              <input 
                type='password' 
                placeholder='Password'
                value={password}
                onChange={
                  (e) => {setPassword(e.target.value)}
                }
              />

              <button onClick={user_auth} type='submit'>{signState}</button>
              <div className='form-help'>
                {/* <div className='remember'>
                  <input type='checkbox' />
                  <label htmlFor=''>Remember me</label>
                </div> */}
                <p>Need Help?</p>
              </div>

              <div className="form-switch">
                {signState ==="Sign In" ? 
                  <p>Are you new user?
                    <span onClick={()=>{setSignState("Sign Up")}}>
                      Sign Up Now
                    </span>
                  </p>:
                  <p>Already have account? 
                    <span onClick={() =>{setSignState("Sign In")}}>
                      Sign In Now 
                    </span>
                  </p>
                  }              
              </div>
            </form>
          </div>
      </div>
    </>
    
  )
}

export default Login