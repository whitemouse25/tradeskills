import React, { useState } from "react";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  // Sample chat data
  const chats = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=1",
        skill: "Web Development",
      },
      lastMessage: "Hey! When would you like to start the lessons?",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      user: {
        name: "Mike Johnson",
        avatar: "https://i.pravatar.cc/150?img=2",
        skill: "Guitar Lessons",
      },
      lastMessage: "That sounds great! Let's do it.",
      time: "1h ago",
      unread: false,
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?img=3",
        skill: "Spanish Language",
      },
      lastMessage: "¡Hola! Ready for our next session?",
      time: "3h ago",
      unread: true,
    },
  ];

  // Sample messages for a chat
  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi! I saw you're interested in learning web development.",
      time: "10:00 AM",
      isSender: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Yes! I'd love to learn React and Next.js specifically.",
      time: "10:05 AM",
      isSender: true,
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content:
        "Perfect! I can definitely help with that. When would you like to start the lessons?",
      time: "10:10 AM",
      isSender: false,
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Here you would typically send the message to your backend
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Chat List */}
      <div className="w-full md:w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 border-b hover:bg-gray-50 flex items-start space-x-3 ${
                selectedChat?.id === chat.id ? "bg-indigo-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={chat.user.avatar || "/placeholder.svg"}
                  alt={chat.user.name}
                  className="w-12 h-12 rounded-full"
                />
                {chat.unread && (
                  <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-indigo-600 ring-2 ring-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {chat.user.name}
                  </p>
                  <p className="text-xs text-gray-500">{chat.time}</p>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
                <p className="text-xs text-indigo-600 mt-1">
                  {chat.user.skill}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-1 flex-col bg-gray-50">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-white">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedChat.user.avatar || "/placeholder.svg"}
                  alt={selectedChat.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {selectedChat.user.name}
                  </h3>
                  <p className="text-sm text-indigo-600">
                    {selectedChat.user.skill}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isSender ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-lg ${
                      msg.isSender
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.isSender ? "text-indigo-200" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Select a chat to start messaging
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Choose from your conversations on the left
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Message Warning */}
      <div className="md:hidden flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">
            Messages are best viewed on desktop
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Please use a larger screen for the best messaging experience
          </p>
        </div>
      </div>
    </div>
  );
}
