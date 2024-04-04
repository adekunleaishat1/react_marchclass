import React,{useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup  from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Formik = () => {
  const navigate = useNavigate()
    const [users, setusers] = useState([])
    useEffect(() => {
      axios.get("http://localhost:1234/users")
      .then((res)=>{
        setusers(res.data)
      }).catch((err)=>{
        console.log(err);
      })
    }, )
    // const formik = useFormik({

    // })
    
    const formik = useFormik({
          initialValues:{
            username:"",
            email: "",
            password:"",
          
          },
          validationSchema:yup.object({
            username:yup.string().min(4,"username is too short").required("username is required"),
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().min(5, "password is too short").matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`,"Password must have atleast a capital letter,an integer and special characters " ).required("password is required")
          }),
          onSubmit:(value)=>{
              console.log(value);
            const existuser =  users.find(exist=> exist.email == value.email && exist.password == value.password)
            if (existuser) {
                toast.error("user already exist")
            }else{
                axios.post("http://localhost:1234/users",value)
            .then((res)=>{
                console.log(res.data)

                toast.success("signup successful")
                navigate = "/login"
            }).catch((err)=>{
                toast.error(err?.response?.data?.message)
            })
            }
          }
    })
    // console.log(formik.errors);
    // console.log(formik.touched);
    
  return (
    <div>
        <form className='w-50 mx-auto px-4 py-4' onSubmit={formik.handleSubmit} action="">
          <div className='form-group'>
            <label htmlFor="">Username</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' className='form-control' type="text" />
            <p className='text-danger'>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>
          </div>
          <div className='form-group'>
            <label htmlFor="">Email</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' className='form-control' type="text" />
            <p className='text-danger'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
          </div>
          <div className='form-group'>
            <label htmlFor="">Password</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' className='form-control' type="text" />
            <p className='text-danger'>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
          </div>
          <div className='mt-3'>
            <button type='submit' className='btn btn-dark'>Register</button>
            <ToastContainer/>
          </div>
        </form>

    </div>
  )
}

export default Formik