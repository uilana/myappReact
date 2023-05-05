import React,{useState} from "react";
const Counter = function(){
    let [state, setState] = useState(0)
    function plus(){
        setState(state+=1)
        console.log(state)
        }
        function minus(){
        setState(state-=1)
        console.log(state)
        }
        return ( 
            <div className="App"> 
            <h1>{state}</h1>
            <button onClick= {plus}> Button1 </button>
            <button onClick= {minus}> Button2 </button>
            </div>
            )
}

export default Counter