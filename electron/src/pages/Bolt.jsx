import React, { useState } from 'react';
import axios from 'axios';

const Bolt = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return; // Prevent sending empty messages
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: input
      });

      const botMessage = { text: response.data.message, sender: 'bot' };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section id="chatbot" className="chatbot flex-grow bg-white text-black flex flex-col" style={{ height: 'calc(100vh - 96px)' }}> {/* Adjust height to be one and a half times the length of the navbar shorter */}
      <div className="w-full h-full flex flex-col justify-between px-4 py-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Bolt Chat Bot</h2>
        <div className="flex flex-col space-y-4 mb-4 flex-grow overflow-y-auto p-4 border border-gray-400 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-400 rounded-l-lg p-2 w-full"
          />
          <button 
            onClick={sendMessage}
            className="bg-[#FF0037] text-white rounded-r-lg px-4"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bolt;