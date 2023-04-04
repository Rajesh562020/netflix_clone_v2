import React from 'react'
import './profileScreen.css'
import Nav from './Nav.js'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice.js'
import { auth } from './firebase'
import PlanScreen from './PlanScreen.js'


export default function ProfileScreen () {
    const user = useSelector(selectUser);
  return (
    <div className='profile_screen'>
     <Nav/>   
       <div className='profileScreen_Body'>
         <h1>Edit Profile</h1>
          <div className='profileScreen_Info'>
            <img className='profileScreen_Body_Nav_Avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9IYll7kSgRWv-_yD1p0-Z6K63gsFgunxsyOiVdKFow&usqp=CAU&ec=48600113' alt=''/>
           <div className='profileScreen_details'>
              <h2>{user.email}</h2>
              <div className='profileScreen_plans'>
                <h3>Plans</h3>
                <PlanScreen/>
                <button onClick={()=>auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
              </div>
           </div>
          </div>
        </div> 
     </div>
  )
}
