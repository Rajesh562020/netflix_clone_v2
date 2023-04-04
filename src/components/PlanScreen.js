import React from 'react'
import './planScreen.css'
export default function PlanScreen() {
    const planData = [{plan:"Basic",quality:"720p"},{plan:"Standard",quality:"1080p"},{plan:"Premium",quality:"4K/HDR"}]
  return (
    <div className='planscreen'>
        {planData.map((item,i)=>{
            return(
                   <div className='planscreen_Plan' key={i}>
                        <div className='planscreen_Info'>
                           <h5> {item.plan} </h5>
                           <h6> {item.quality} </h6>
                        </div>
                        
                        <button>
                        Subscribe
                        </button>
                 </div>
            );
        })}
     
    
    
    </div>
  )
}

