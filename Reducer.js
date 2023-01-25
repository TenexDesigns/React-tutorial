import React from 'react'
import { useState,useEffect,useReducer } from 'react'

function Count() {
    const [count,SetCount]= useState(0)
    const initialvalue = 0;
    const [users,setCount] = useState(initialvalue);

    const [name, Setname] = useState({firstName:'George',secondName:'Gacau'})

    const [items,setItem] = useState([])
    function addItem(){
        setItem([...items,{id:items.length,value:Math.floor(Math.random()*30)}])

    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

    const initialstate=0;
    function reducerfunction(state,action){

        switch(action){
            case 'increase':
                return state +1
            case 'decrease':
                return state-1
            case 'reset':
                return initialstate
            default:
                return state
        }

    }

    const [counter,dispatch]= useReducer(reducerfunction,initialstate)

  return (
    <div>

        <div>
            <h3>{counter}</h3>
        <button onClick={()=>dispatch('increase')}>increase</button>
        <button onClick={()=>dispatch('decrease')}>Decrease</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        </div>





        
        <h1>{count}</h1>
        <button onClick={()=>{SetCount(prevous=>prevous +1)}}>Click me</button>

        <h1>Count : {users}</h1>
        <button onClick={()=>{setCount(prevous=>prevous +4)}}>Increase</button>
        <button onClick={()=>{setCount(prevous=>prevous -4)}}>Decrease</button>
        <button onClick={()=>{setCount(initialvalue)}}>Reset</button>


        <div>

        <label>First Name</label>
       <input type= "text" onChange={(e)=>{
        Setname({...name,firstName:e.target.value})
       }}/>
        <label>Last Name</label>
        <input type= "text"
        onChange={(e)=>{
            Setname({...name,secondName:e.target.value})
           }}/>

        <h3>First name: {name.firstName}</h3>
        <h3>Last name : {name.secondName}</h3>




        </div>
       <ul> {items.map(
            (item)=>{
                return <li key={item.id}>{item.value}</li>

            })
        }
        
        </ul>

        <button onClick={addItem}>Add item</button>


        <div>


        </div>

        
        
        
        </div>
  )
}

export default Count
