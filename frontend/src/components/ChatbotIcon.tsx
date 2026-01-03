
function ChatbotIcon() {
  return (
      <button   className="
        fixed bottom-6 right-6
        w-28 h-16
        rounded-full
        bg-blue-600
        flex items-center justify-center
        shadow-full
        transition
      "
      aria-label="Open chatbot" >
        <img
        src="/chatbot-icon.png"
        alt="Chatbot"
        className="w-16 h-16 rounded-2xl shadow-full object-cover "
      />
    </button>
  )
}

export default ChatbotIcon
