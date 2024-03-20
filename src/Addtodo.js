import React ,{useState}from 'react'

const Addtodo = ({click, data}) => {
    const [inp, setinp] = useState("")
    const [input, setinput] = useState("")
   console.log(data);
  return (
    <div>
        <input onChange={(e)=>setinp(e.target.value)} type="text" />
        <input onChange={(e)=>setinput(e.target.value)} type="text" />
        <button onClick={()=>click({inp, input})}>todo</button>
        {/* {
            data.map((el)=>)
        } */}
    </div>
  )
}

export default Addtodo