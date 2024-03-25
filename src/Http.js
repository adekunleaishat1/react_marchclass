import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Http = () => {
    const [count, setcount] = useState(0)
    const [calculations, setcalculations] = useState(0)
    const [product, setproduct] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      setcalculations(count * 2)
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            console.log(res.data.products);
            setproduct(res.data.products)
        }).catch((error)=>{
            console.log(error);
        })
   
    }, [count])
    // fetch("https://dummyjson.com/products")
    // .then(res=> res.json())
    // .then(data=> console.log(data))
    const seemore = (el) =>{
      console.log(el.id);
      let id = el.id
      navigate(`/one/${id}`)
    }
    
  return (
    <div>
          <h1>{count}</h1>
          <h1>{calculations}</h1>
          <button onClick={(()=>setcount(count + 1))}>change</button>
          <div className='justify-content-between  w-100'>
          {product.map((el, i) =>(
            <>
           <div className='card w-50 px-4 py-3 mt-3'>
             <h1>{el.title}</h1>
            <img src={el.thumbnail}  />
            <h1>{el.description}</h1>
              <button onClick={()=>seemore(el)}>See more</button>
           </div>
            </>
          ))}
          </div>
          
    </div>
  )
}

export default Http