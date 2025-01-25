import React, { useState } from 'react';
import '../styles/Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: '👨‍💼', message: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: '👩‍💻', message: 'I\'m good! Working on the project.', time: '10:32 AM' },
    { id: 3, sender: '👨‍💼', message: 'That\'s great! Need any help?', time: '10:33 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: '👩‍💻',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Messages</h3>
      </div>
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender === '👩‍💻' ? 'sent' : 'received'}`}>
            <span className="avatar">{msg.sender}</span>
            <div className="message-content">
              <p>{msg.message}</p>
              <span className="time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
