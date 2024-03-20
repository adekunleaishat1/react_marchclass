import React,{useState} from 'react'
import Card from './Card'
import imag from './AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png'
import Addtodo from './Addtodo'
import Distodo from './Distodo'
import Navbar from './Navbar'

const Discard = () => {
    const [allinput, setallinput] = useState([])
    let data =[
        {photo:imag, content:"movie"},
        {photo:imag, content:"song"}
    ]
    const addtodo = (inp) =>{
        // let detail = {
        //     inp,
        //     input
        // }
        console.log(inp);
        setallinput([...allinput, inp])
        console.log(allinput);

    }
  return (
    <div>
      <Navbar/>
        {data.map((el, i)=>(
            <>
              <div className='card shadow px-4 py-3'>
              <Card image={el.photo} text={el.content}/> 
              </div>
            
            </>
        ))

        }
        {/* <h1>{inp}</h1> */}
      <Addtodo data={data} click={addtodo} />
      <Distodo ainput={allinput}/>
    </div>
  )
}

export default Discard