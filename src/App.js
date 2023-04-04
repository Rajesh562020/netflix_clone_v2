import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import { auth } from "./components/firebase";
import HomeScreen from './components/HomeScreen.js';
import Login from "./login/Login.js";
import {logout,login,selectUser} from "./features/userSlice.js";
import ProfileScreen from "./components/ProfileScreen.js";


function App() {
    const user = useSelector(selectUser);
  //const user = {name:"raj"};
   const dispatch = useDispatch();
  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //logged in
      //console.log(userAuth);
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }));
    }
    else{
      //logged out
     dispatch(logout());
    }
  })
  return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
     
     <Router>
      {/* code for displaying login */}


      {
      
      !user ?(<Login/>) : (<Routes>

          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>

          </Routes>)
          
          
      }
        
      
    </Router>
    </div>
  );
}

export default App;
