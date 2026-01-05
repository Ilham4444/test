import { Paperclip, Mic, Send } from "lucide-react";
import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  time: string;
};

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const getCurrentTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Réponse IA simulée
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          "Hi, everyone! I just make my first thread. Don't forget, if you are want to comment please refer it to general. Thank you for the support!",
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <main className="flex-1 bg-gray-100 flex flex-col">

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-10 py-6">
        {messages.length === 0 ? (
          /* ÉCRAN DE BIENVENUE */
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img
              src="/chatbot-icon.png"
              alt="Robot"
              className="w-24 h-24 mb-4"
            />
            <h1 className="text-xl font-bold text-gray-800">
              BONJOUR, COMMENT ALLEZ-VOUS ?
            </h1>
          </div>
        ) : (
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* TODAY */}
            <div className="flex items-center gap-4 my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="text-xs text-gray-400">Today</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div className="max-w-md bg-white shadow rounded-xl p-4 space-y-2">

                  {/* HEADER */}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <img
                      src={
                        msg.sender === "user"
                          ? "profile.png"
                          : "chatbot-icon.png"
                      }
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-bold text-black">
                      {msg.sender === "user" ? "Vous" : "IA ASSISTANT"}
                    </span>
                   {msg.sender === "ai" && (
                   <span className="text-gray-400 text-xs">{msg.time}</span>
               )}
                  </div>

                  {/* MESSAGE */}
                  <p className="text-sm text-gray-800">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="p-6">
        <div className=" mx-auto max-w-3xl bg-white rounded-lg flex items-center justify-center px-4 py-3 gap-3 shadow">
          <button className="text-green-500">
            <Paperclip className="w-5 h-5" />
          </button>

          <button className="text-green-500">
            <Mic className="w-5 h-5" />
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            type="text"
            placeholder="Write a message..."
            className="flex-1 outline-none text-black"
          />

          <button
            onClick={handleSend}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Chatbot;
