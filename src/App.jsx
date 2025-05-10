import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen bg-black text-white '>
        
        <div className="header w-full flex justify-center border-b-2 ">
          <h1 className='font-extrabold text-3xl'>Chat bot </h1>
        </div>
      
      <div className='w-full h-full flex justify-center items-center '>
        <div className='h-1/2 w-1/2 text-center border-2'>       
            <h1 className='text-2xl font-bold '>AI assistant </h1>
        </div>

      </div>
      </div>
    </>
  )
}

export default App
