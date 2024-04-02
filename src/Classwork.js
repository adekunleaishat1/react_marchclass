import { useState , useEffect} from "react"
import axios from "axios"


const Classwork = () => {
    const [inp, setinp] =useState("")
    const [inp1, setinp1] =useState("")
    // const [list, setlist] =useState([] && JSON.parse(localStorage.getItem("alllist")))
    // useEffect(() => {
      
    //     localStorage.setItem("alllist", JSON.stringify(list) )
    
    // }, [list])
    
    const click=()=>{
        console.log(inp);
        console.log(inp1);
    
        // console.log(obj);
        // setlist([...list, obj])
        axios.post("http://localhost:1234/post",{title:inp, content:inp1})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })


    }
    
  return (
    
    <div>
        <input onChange={(e)=>setinp(e.target.value)} type="text" />
        <input onChange={(e)=>setinp1(e.target.value)} type="text" />
        <button onClick={click}>Add</button>
    </div>
  )
}

export default Classwork