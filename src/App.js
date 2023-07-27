import React, { useState } from 'react';
import './App.css';

function App() {
  const[userName,setUserName]=useState('');
  const[userAge,setUserAge]=useState('');
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
 
   const handleSubmit=()=>{
    localStorage.setItem('name',userName);
    localStorage.setItem('age',userAge);
    sessionStorage.setItem('name',userName);
    sessionStorage.setItem('age',userAge);
    document.cookie=('name',userName)
   }
  
   const handleGet=()=>{
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'))
   }

   const handleClear=()=>{
    localStorage.clear()
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
   </React.Fragment>
  );
}

export default App;
