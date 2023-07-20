import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputValue = useRef();
  const buttonAdd = useRef();
  
  
  const taskAdd = () => {
    const theValue = inputValue.current.value;
    buttonAdd.current.innerText = theValue
  }
  const deleteTask = () => {
    buttonAdd.current.innerText = ''
  }



  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col'>
          <input ref={inputValue} className="p-2 m-5 w-100" placeholder='Write your tasks' />
          <button onClick={taskAdd} className='btn-success m-3 rounded-5'>Task Add</button>

      </div>
      <div className='col'>
          <div className='row p-5'>
            <div>
              <p ref={buttonAdd} className='text-white'></p>
            </div>
            <div>
              <button onClick={deleteTask} className='btn-danger'>Delete</button>
            </div>
        </div>
      </div>
      </div>
        
    </div>
  )
}

export default App
