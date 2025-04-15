import { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import './styles.css';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('User' + Math.floor(Math.random() * 1000));
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('realtime_messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async () => {
    let { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: true });
    if (!error) setMessages(data);
  };

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;
    await supabase.from('messages').insert([{ text: newMessage, user }]);
    setNewMessage('');
  };

  return (
    <div className="p-4 max-w-lg mx-auto flex flex-col h-screen bg-gray-200">
      <h1 className="text-xl font-bold mb-4 text-center bg-green-600 text-white p-3 rounded">WhatsApp Clone</h1>
      <div className="flex-1 border p-4 overflow-y-auto mb-4 bg-white rounded shadow-md flex flex-col">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-1 rounded max-w-xs ${msg.user === user ? 'bg-green-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
          >
            <p className="text-sm font-bold">{msg.user}</p>
            <p className="text-lg">{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="flex gap-2 p-2 bg-white rounded shadow-md">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 flex-1 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
