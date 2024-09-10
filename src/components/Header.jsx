import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

let arrayboxes =[{id:1,name:"Tutorials"},{ id:2,name:"Exercise"},{ id :3,name :"Certificates"}]

const Header = () => {

    let id = 3;

  return (
    <nav>
          <ul>
                   {
                    arrayboxes.map( (box)=> <li key={box.id}>{ box.name}</li> )
                   }

          </ul>

<Link  to ={`/about/${id}`}> <button>about</button></Link>     
     </nav>
        
    
  )
}

export default Header