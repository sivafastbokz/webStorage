import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';

function App() {
  const[userName,setUserName]=useState('');
  const[userAge,setUserAge]=useState('');
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[cookies,setCookies]=useCookies('');
 
   const handleSubmit=()=>{
    localStorage.setItem('name',userName);
    localStorage.setItem('age',userAge);
    sessionStorage.setItem('name',userName);
    sessionStorage.setItem('age',userAge);
    setCookies('name',userName);
    setCookies('age',userAge);
    
   }
  
   const handleGet=()=>{
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
   }

   const handleClear=()=>{
    localStorage.clear()
   }

   const addDataIntoCache = (cacheName,url,userName)=>{
    const data = new Response(JSON.stringify(userName))

    if('caches' in window){
         caches.open(cacheName).then((cache)=>{
          cache.put(url,data)
         })
    }
   }


  return (
   <React.Fragment>
    <input type='text' placeholder='username' onChange={(event)=>setUserName(event.target.value)}></input>
    <br/>
    <input type='number' placeholder='userage' onChange={(event)=>setUserAge(event.target.value)}></input>
    <br/>
    <button onClick={handleSubmit}>sumbit</button>
    <button onClick={handleGet}>get userData</button>
    <button onClick={handleClear}>clear</button>
    <table>
      <tr>
          <th>name</th>
          <th>age</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
      </tr>
    </table>
    <h3>Data in cookiesStorage</h3>
      <p>Name:{cookies.name}</p>
      <p>Age:{cookies.age}</p>
      <button onClick={()=>addDataIntoCache('MyCache',
      'https://localhost:3000','kelly')} >add data to cache storage</button>
   </React.Fragment>
  );
}

export default App;
