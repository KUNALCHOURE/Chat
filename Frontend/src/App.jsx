import './App.css'
import ChatBot from './component/chatbot';
import { FaRobot } from 'react-icons/fa';
function App() {
 

  return (
    <>
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8 space-x-3">
            <FaRobot className="text-3xl text-blue-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Chat Assistant
            </h1>
          </div>
          <ChatBot />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
