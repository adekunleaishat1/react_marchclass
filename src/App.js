import style from "./Mystyle"
import image from './AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png'
import { AiFillCaretDown } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
import Discard from "./Discard";
import Todo from "./Todo";
import Dashboard from "./Dashboard";
import Http from "./Http";
import Oneproduct from "./Oneproduct";
import Classwork from "./Classwork";
import Formik from "./Formik";
import Login from "./Login";
import Music from "./Music";
import Counter from "./Counter";
import Alluser from "./Alluser";


const App = () =>{
  // const mystyle ={
  //   header: {
  //     color:"blue",
  //     fontSize:"20px"
  //   },
  //   nav:{
  //     color:"yellow",
  //     fontSize:"20px"
  //   }
   
  // }
  const click = () =>{

  }
  return(
    <>
    {/* <Navbar/> */}
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/*" element={<Notfound/>}/>
       <Route path="/student/signup" element={<Discard/>}/>
       <Route path="/http" element={<Http/>}/>
       <Route path="/one/:id" element={<Oneproduct/>}/>
       <Route path="/class" element={<Classwork/>}/>
       <Route path="/form" element={<Formik/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/music" element={<Music/>}/>
       <Route path="/count" element={<Counter/>}/>
       <Route path="/user" element={<Alluser/>}/>

      
       <Route path="/dashboard" element={<Dashboard/>}>
         <Route path="/dashboard/profile" element={<Todo/>}/>
         <Route path="/dashboard/card" element={<Discard/>}/>
       </Route>
    </Routes>
      {/* <h1 style={{color:'red', backgroundColor:'black'}}>Welcome to react class</h1>
      <p style={style.header}>internal styling</p>
      <p style={style.nav}>internal styling</p>
      <div className="cont"></div>
      <button onClick={click} className="btn btn-success">button</button>
      <i className="fa fa-users"></i>
      <img src={require('./AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png')} />
      <img src={image} alt="" />
      <AiFillCaretDown /> */}
    </>
  )
}


export default App