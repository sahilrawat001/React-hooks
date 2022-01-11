import React, {useState , useEffect} from 'react';
import './App.css';

const  Effect=()=> {
   const [myNum,setmyNum]=  useState(0);

useEffect(() => {
    document.title=`Chats( ${myNum} ) `;
    } ,[myNum] );

  return (
    <>
    <div className='center_div' >
      <p> useEffect { myNum }    </p>
       
      <div class ="button2"   onClick= {()=>  setmyNum(myNum+1)}  >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCR
       </div>


    </div>
    
    </>
  )
}



export default Effect;
