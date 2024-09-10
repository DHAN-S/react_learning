import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'

const About = () => {
  let {identity} = useParams();
  console.log(identity);
  
  console.log(identity);
let [username,setUserName]   = useState('')
let [password,setPassword]   = useState('')

console.log(username,password);
const handleChange=(e)=>
{
  e.preventDefault();

  let data = { username, password };

  axios.post("/login" ,  data).then((response)=>{
    console.log(response+" here");
  })
}

  return (
     
<form   onSubmit={(e)=>handleChange(e)}>
    <input type='text' name ="userid"  onChange={(e)=>

      setUserName(e.target.value)
    } /> 
    <input type='text' name ="password"   onChange={(e)=>
      setPassword(e.target.value)
    } /> 
   <input type="submit"/>
</form>


  )
}

export default About