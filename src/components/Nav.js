import './nav.css'
import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Nav() {
    const navigate = useNavigate();
    const [show,setShow] = useState(false);
    const scrollEffect = () =>{
        if(window.scrollY >100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    useEffect(()=>{
     window.addEventListener("scroll",scrollEffect);
     return () => window.removeEventListener("scroll",scrollEffect);
    },[])
  return (
    <div className={`navbar ${show && "nav_Black"}`}>


        <div className='nav_contents'>

        <img onClick={()=>navigate("/")} className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158' alt='netflix_logo'/> 

         <img onClick={()=>navigate("/profile")} className='nav_avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9IYll7kSgRWv-_yD1p0-Z6K63gsFgunxsyOiVdKFow&usqp=CAU&ec=48600113' alt='avatar_img'/>

        </div>
   
    
    
    </div>
  )
}
