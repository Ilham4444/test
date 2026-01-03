import { Plus, MoreVertical, Trash2, Search, MessageCircleMore, SquarePen, TicketMinus, TicketPlus, RectangleGoggles, RectangleVertical, HdmiPort} from "lucide-react";
import { useState } from "react";
type Chat = {
  id: number;
  title: string;
};
function Sidebar(){
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(true);
     const chats: Chat[] = [
    { id: 1, title: "LES BASES PYTHON" },
    { id: 2, title: "LES BASES PYTHON" },
    { id: 3, title: "LES BASES PYTHON" },
  ];
    return(
     <aside  className={`relative h-screen bg-white border-r flex flex-col py-5
      transition-all duration-300 ease-in-out
      ${isOpen ? "w-64 px-4" : "w-16 px-2"}`}>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-14 h-14 rounded-full  flex items-center justify-center text-white font-bold">
          <img src="/chatbot-icon.png" alt="Robot" className="w-10 h-10"/>
        </div>
        {isOpen && ( <span className="font-small text-s text-black">TOMATO-CHAT</span>)}
      </div>
      
        <hr className="border-gray-200 my-2 " />

        <div className="flex items-center gap-3 mb-6">
      
      <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-4 py-2 rounded-lg">
        <Plus className="w-4 h-4" />
        
       {isOpen && "NEW CHAT"}
      </button>
     {isOpen && (
      <button className="flex items-center justify-center w-9 h-9 bg-black hover:bg-gray-800 text-white rounded-full">
        <Search className="w-4 h-4" />
      </button>
     )}
    </div>
     {isOpen && (
      <div className="flex-1 space-y-2  font-bold overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="relative group flex items-center justify-between px-2 py-2 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MessageCircleMore className="w-4 h-4" />
              {chat.title}
            </div>

            {/* Menu button */}
            <button
              onClick={() =>
                setOpenMenuId(openMenuId === chat.id ? null : chat.id)
              }
              className="opacity-100  text-black "
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {/* Dropdown menu */}
            
            {openMenuId === chat.id && (
              <div className="absolute right-0 top-10 w-36 bg-white font-bold border rounded-lg shadow-md z-10">
                <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-black  hover:bg-gray-100">
                  <SquarePen className="w-4 h-4" />
                  Renommer
                </button>
                <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                  Supprimer
                </button>
              </div>
            )}
          </div>
        ))}
        </div>
    )}
        <button    
          onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2
        bg-green-500 w-6 h-16 rounded-r-xl flex items-center justify-center
        hover:bg-green-600 transition"
      >
        </button>
        </aside>
    )
}
export default Sidebar