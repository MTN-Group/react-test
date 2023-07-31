import { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputElement = useRef()
  const [list, setList] = useState(['Buy groceries','Workout routine','Pay utility bills'])

  /**
   * Makes api call to https://b1f8-102-89-22-42.ngrok-free.app/api/todo to get list of todos and display in the list below
   */
  const GetList = ()=>{

  }

  /**
   * This should append to the already fetched list
   */
  const AddToList = () =>{

  }

  /**
   * This should remove from the existing list
   */
  const RemoveFromList = ()=>{

  }

  /**
   * This should enable us edit a specific task amongst the list
   */
  const ModifyItemInList =()=>{

  }

  const AddView = ()=>{
    return <div>
      <input ref={inputElement} placeholder='Enter a Task'/>
    </div>
  }

  return (
    <div className="App">

      <div>
      <h1>Todo-list</h1>

        {/** Show List of fetch todos */}

        <AddView/>

      <br/>
      <button onClick={AddToList}>Add</button>

      <br/>
      <br/>

      <button onClick={RemoveFromList}>Remove</button>

      </div>

    </div>
  );
}

export default App;
