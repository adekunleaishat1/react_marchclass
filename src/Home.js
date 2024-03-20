import React, {useState} from 'react'
import Button from './Button'
import Img from './Img'

const Home = () => {
  const [name, setname] = useState("keemah")
  const [gender, setgender] = useState("male")
  const [input, setinput] = useState("")
  const [input1, setinput1] = useState("")
  const [list, setlist] = useState([])
  // let gender = "male"
  // let name = "keemah"
  let students = [
  // {name:"Tola", class:"React"},
  // {name:"Bola", class:"React"},
  // {name:"Bolu", class:"Javascript"},
  // {name:"richard", class:"Node"}
  ]
  const change = () => {
    //  setname("sekinat") 
    // console.log(name);
    let obj = {
      input,
      input1
    }
    // console.log(obj);
    setlist([...list, obj])
    console.log(list);

  }
  const login = () =>{
    alert("login successful")
  }
  const signup = () =>{
    alert("signed up successfully")
  }
  // {conditional expression ? true expression : false expression}
  return (
    <div>
      <h1 className={gender == "female" ? "text-secondary" : "text-danger"}>{gender == "female" ? name : "toheeb"}</h1>
      <h1>{name}</h1>
      {/* <h1>{input}</h1> */}
      <button onClick={change}>Change</button>
        <h1>home {Math.random()}</h1>
        {students.length == 0 ? "No user available" : (
          students.map((el, i)=>(
            <>
            <div key={i}>
             <h1>{i + 1}</h1>
            <h1>{el.name}</h1>
            <h1>{el.class}</h1>
            </div>
            </>
         ))
        )

        }
        <input onChange={(e)=>setinput(e.target.value)}  type="text" />
        <input onChange={(e)=>setinput1(e.target.value)}  type="text" />
        {
          list.map((el)=>(
            <>
            <h1>{el.input}</h1>
            <h1>{el.input1}</h1>
            </>
          ))
        }
        <Button click={login} style="btn btn-dark" content="Login"/>
        <Button click={signup} style="btn btn-success"  content="signup"/>
        <Button style="btn btn-danger"  content="Dashboard"/>
        <Img image={require("./AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png")}/>
        <Img image={require("./AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png")}/>

    </div>
  )
}

export default Home