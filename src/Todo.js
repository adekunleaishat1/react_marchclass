import React, {useState} from 'react'
import Discard from './Discard'

const Todo = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [alltodo, setalltodo] = useState([])
    const [index, setindex] = useState("")
    const [onetodo, setonetodo] = useState({})
    const save  =() =>{
        let todos = {
            title,
            content
        }
        console.log(todos);
        setalltodo([...alltodo, todos])
        settitle("")
        setcontent("")
        console.log(alltodo);
    }
    const deletetodo = (i) =>{
      console.log(i);
      alltodo.splice(i, 1)
      setalltodo([...alltodo])
    }
    const edittodo = (i, el) =>{
        setonetodo({...el})
        setindex(i)
       
    }
    const savechange = () =>{
       alltodo[index] = onetodo
       setalltodo([...alltodo])
    }
  return (
    <div>
        <div className='w-50 mx-auto shadow px-5 py-4  '>
            <h1 className='text-muted text-center mt-3'>Todo list</h1>
           <input value={title} onChange={(e)=>settitle(e.target.value)} className='form-control mt-3' type="text" placeholder='Title' />
           <input value={content} onChange={(e)=>setcontent(e.target.value)} className='form-control mt-3' type="text" placeholder='Content'/>
           <button onClick={save} className='mt-3 btn btn-dark'>Add Todo</button>
        </div>
        {/* <Discard/> */}
        {alltodo.map((el, i)=>(
            <>
            <div key={i} className='d-flex justify-content-between align-items-center mt-5 shadow w-50 mx-auto px-3 py-4'>
                <p>{el.title}</p>
                <p>{el.content}</p>
                <button onClick={()=>deletetodo(i)}>Delete</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edittodo(i,el)}>Edit</button>
            </div>
            </>
        ))

        }
    



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <input value={onetodo.title} onChange={(e)=>setonetodo({...onetodo, title:e.target.value})} className='form-control mt-3' type="text" placeholder='Title' />
           <input value={onetodo.content} onChange={(e)=>setonetodo({...onetodo, content:e.target.value})} className='form-control mt-3' type="text" placeholder='Content'/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={savechange} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Todo