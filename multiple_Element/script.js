import { user } from "./data";
import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
// console.log(React);
// console.log("Hello Programmer")
// console.log(user.nameuser);

// const h2=<h2>Here we  create a multiple elements</h2>


function Card(key,title,thumbnail,brand,price)
{
    return <div className='card' key={key}>
      <img src={thumbnail} />
      <div className="card-info">
        <h4>{title}</h4>
        <p>{brand}</p>
        <p><b>₹.{price}</b></p>
      </div> 
    </div> 
}    
 

// const container=[Card(1),Card(2),Card(3),Card(4),Card(5),Card(6)]

const root =createRoot(document.querySelector('#root'))


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data)
    const container2=data.products.map((product)=>{
        return Card(product.id,product.title,product.thumbnail,product.brand,product.price)
    })
    root.render(<div className="container">{container2}</div>)
});  