
import './App.css'
import Sidebar from './components/Sidebar';
import ChatBot from './components/Chatwindow';
import ChatbotIcon from './components/RobotIcon';
import { useState } from "react";


function App() {
 const [open, setOpen] = useState(false);
    if (!open) {
    return <ChatbotIcon onOpen={() => setOpen(true)} />;
  }
   return (
    <div className="h-screen w-screen flex ">
      <Sidebar />
      <ChatBot  />
    </div>
  );
 
}

export default App
