import  axios  from 'axios'
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Fetchinguser,Fetchingsuccessful,Fetchingfailed} from './Redux/Userslice'

const Alluser = () => {
    const {alluser, fetcherror, isfetching} = useSelector(state=>state.userslice)
    console.log(isfetching);
    console.log(alluser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Fetchinguser())
      axios.get("http://localhost:1234/users")
      .then((res)=> {
        dispatch(Fetchingsuccessful(res.data))
       console.log(res);
    }).catch((err)=>{
        dispatch(Fetchingfailed(err))
        console.log(err);
    })
    }, [])
    
  return (
    <div>
       {isfetching? "loading ..." : alluser.map((el)=>(
        <>
        <h1>{el.email}</h1>
        <h1>{el.username}</h1>
        </>
       ))

       }
    </div>
  )
}

export default Alluser