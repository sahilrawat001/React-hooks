import React, {  useReducer} from 'react';
import './App.css';
 

const reducer= (state , action)=>{
  if(action.type==="INCR"){
state= state+1;
  }
  if(state>0 && action.type==="DECR"){
state= state-1;
  }
 return state;
};
const  Reduce=()=> {
    const initialData=10;
const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
    <div className='center_div'>
      <p> useReducer { state } </p>
       <div class ="button2" onClick= {()=> dispatch( {type:"INCR"} )    } >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCR
       </div>
       <div class ="button2" onClick= {()=> dispatch( {type:"DECR"} )    } >

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



export default Reduce;
