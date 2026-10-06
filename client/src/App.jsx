import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [message, setMessage]=useState("");
  useEffect(()=> {
    fetch("http://localhost:4000/api/message")
    .then((res)=>res.json())
    .then((data) => setMessage(data.message))
    .catch((err)=>{
      console.error(err);
    })
  },[])

  return (
    <>
    <h1>welcome to piyush</h1>
    <p>data {message} </p>
    </>
  )
}

export default App
