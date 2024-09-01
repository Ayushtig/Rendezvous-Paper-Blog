import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")

    const navigate=useNavigate()

    const LogIn= async()=>{
        try{
            await signInWithEmailAndPassword(getAuth(),email,password)  
            navigate("/articles")      
        }
        catch(e){
            setError(e.message)
        }
    }
    function changeBg()	{
  
        var backgrounds = ["https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666608477859-331b9d7d450f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602421249025-cf5b41fbde72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602421249025-cf5b41fbde72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561321385-39275736552f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687033826149-5ad6e5471e44?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

        var imgShown = document.body.style.backgroundImage;
        var newNumber = Math.floor(Math.random()*backgrounds.length);
        document.body.style.background = 'url('+backgrounds[newNumber]+')';
}

window.onload = changeBg;
    return (
    < >
        <div className='logindiv'>
        <h1 style={{color:"#fff"}}>Log In</h1>
        {error && <p className='error'>{error}</p>} 
        <input type="text" placeholder='Your email address' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
        <input type="password" placeholder='Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
        <button onClick={LogIn}>Log In</button> <br/><br/>
        <Link to="/create-account" style={{color:"pink"}}>Create New Account</Link>
        </div>
    </>
  )
}

export default Login