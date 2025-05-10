import React from 'react'

export default function Chatbot() {
  return (
      <div className='h-screen w-screen bg-black text-white '>
        
        <div className="header w-full flex justify-center border-b-2 ">
          <h1 className='font-extrabold text-3xl'>Chat bot </h1>
        </div>
      
      <div className='w-full h-4/5  flex justify-center  relative  '>
        <div className=' absolute h-3/4 w-1/2 text-center border-2 top-20 '>       
            <h1 className='text-2xl font-bold '>AI assistant </h1>
            <hr />
<div className="input absolute bottom-4 w-full left-0">
  <div className="flex items-center bg-gray-200 rounded-2xl px-6 py-2">
    <input
      type="text"
      className="flex-1 bg-transparent outline-none text-black"
      placeholder="Type your message"
    />
    <i
      className="far fa-paper-plane text-white bg-blue-600 cursor-pointer rounded-full p-2 ml-2"
      // You can also add onClick handler here for send action
    />
  </div>
</div>

        </div>
        

      </div>
      </div>
  )
}
