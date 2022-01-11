import React, {useState} from 'react';
import './App.css';

const  App=()=> {
let startNum=10;
  const [myNum,setmyNum]=  useState(startNum);

  return (
    <>
    <div className='center_div'>
      <p> useState { myNum }    </p>
       <div class ="button2" onClick= {()=>  setmyNum(myNum+1)}  >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCR
       </div>
       <div class ="button2" 
       onClick= {()=>(myNum>0?  setmyNum( myNum -1): setmyNum(0) ) }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      DECR
       </div>


    </div>
    
    </>
  )
}



export default App;
