import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {faPlay} from 'react-icons/fa'
import { useRef } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

const Music = () => {
    const musicref = useRef([])
    // console.log(musicref.current);
    const [playing, setplaying] = useState(false)
    const [datas, setdatas] = useState([])
    
    useEffect(() => {
      axios.get("https://robo-music-api.onrender.com/music/my-api")
      .then((res)=>{
        console.log(res.data);
        setdatas(res.data)
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    const play = (i) =>{
        const audio = musicref.current[i]
        console.log(audio);
        audio.play()
        // if (playing == false) {
        //     audio.play()
        //     setplaying(true)
        // }else{
        //     audio.pause()
        //     setplaying(true)
        // }
        
        
    }
    
  return (
    <>
        <div>
           {datas.map((el,i)=>(
            <div  key={i}>
                <audio ref={el=>musicref.current[i] = el} src={el.songUrl}></audio>
                <img src={el.songImage} alt="" />
                <h1>{el.songTitle}</h1>
                <div onClick={()=>play(i)}>
                    <faPlay/>
                    <AiFillPlayCircle/>
                </div>
            </div>
           ))

           }
        </div>
    </>
  )
}

export default Music