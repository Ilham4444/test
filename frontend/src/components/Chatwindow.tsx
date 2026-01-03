import { Paperclip, Mic, Send } from "lucide-react";
function Chatbot() {
    return(
       <main className="flex-1 bg-gray-100 flex  flex-col items-center justify-center relative">
      <div className="text-center mb-32">
        <div className="w-24 h-24  items-center justify-center mx-auto"><img src="chatbot-icon.png" alt="Robot" /></div>
        <h1 className="text-xl text-gray-800 font-bold">
          BONJOUR, COMMENT ALLEZ VOUS !
        </h1>
      </div>
       <div className="w-1/2 bg-white rounded-lg flex items-center px-4 py-3 gap-3 shadow">
      
      <button className="text-green-500 hover:text-green-600">
        <Paperclip className="w-5 h-5" />
      </button>
      <button className="text-green-500 hover:text-green-600">
        <Mic className="w-5 h-5" />
      </button>

      <input
        type="text"
        placeholder="Write a message..."
        className="flex-1 text-black bg-transparent outline-none"
      />

      <button className="bg-green-500 hover:bg-green-600 text-white justify-center rounded-full p-2">
        <Send className="w-4 h-4" />
      </button>

    </div>
      </main>
     )
}
export default Chatbot
