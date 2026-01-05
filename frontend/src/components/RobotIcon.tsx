
type Props = {
  onOpen: () => void;
};

function ChatbotIcon({ onOpen }: Props) {

  
  return (
    <>
    <button   onClick={onOpen} className="
        fixed bottom-6 right-6
        w-28 h-16
        rounded-full
        flex items-center justify-center
        shadow-full
        transition
      "
      aria-label="Open chatbot" >
        <img
        src="/chatbot-icon.png"
        alt="Chatbot"
        className="w-16 h-16 rounded-3xl shadow-full object-cover "
      />
    </button>
    
     
</>


  )
}

export default ChatbotIcon
