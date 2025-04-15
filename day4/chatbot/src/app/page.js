"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    const newChat = [...chatHistory, { role: "user", text: question }];
    setChatHistory(newChat);
    setQuestion("");

    try {
      const res = await axios.post("/api/gemini", { question });
      setChatHistory([...newChat, { role: "ai", text: res.data.reply }]);
    } catch (error) {
      setChatHistory([...newChat, { role: "ai", text: "Error fetching AI response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] text-white">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Gemini AI</h1>
        <a href="#" className="text-white hover:underline">Home</a>
      </nav>
      
      {/* Chat Container */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold text-center mb-4 drop-shadow-lg">Ask Gemini AI</h1>
          
          {/* Chat Messages */}
          <div ref={chatRef} className="h-80 overflow-y-auto p-3 space-y-3 bg-white/20 rounded-lg shadow-inner">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg w-fit max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="animate-pulse text-gray-200">AI is thinking...</p>}
          </div>

          {/* Input & Button */}
          <div className="mt-3 flex gap-2">
            <textarea
              className="w-full p-2 border rounded resize-none bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              rows="2"
              placeholder="Ask something..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              onClick={askAI}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all disabled:opacity-50 shadow-lg"
              disabled={loading}
            >
              {loading ? "..." : "Ask"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}