import React,{useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
    const  [users, setusers] =useState([])
    useEffect(() => {
       axios.get("http://localhost:1234/users")
       .then((res)=>{
          console.log(res);
          setusers(res.data)
       }).catch((err)=>{
         console.log(err);
       })
      
    }, [])
    
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().email("must be a valid email").required("email is required"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`,"Password must have atleast a capital letter,an integer and special characters " ).required("password cannot be empty")
        }),
        onSubmit:(value) =>{
              console.log(value);
             const existuser =   users.find(exist => exist.email == value.email && exist.password == value.password)
             console.log(existuser);
             if (existuser) {
                toast.success("login successful")
             }else{
                toast.error("invalid login")
             }
        }
    })
  return (
    <div>
        <form className='w-50 mx-auto px-4 py-4' onSubmit={formik.handleSubmit} action="">
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

export default Login