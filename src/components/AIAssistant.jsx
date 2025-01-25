import React, { useState } from 'react';
import '../styles/AIAssistant.css';

const AIAssistant = () => {
  const [activeAI, setActiveAI] = useState('copilot');
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      const newResponse = {
        id: responses.length + 1,
        ai: activeAI,
        prompt,
        response: `Sample ${activeAI} response to: ${prompt}`,
        timestamp: new Date().toLocaleTimeString()
      };
      setResponses([newResponse, ...responses]);
      setPrompt('');
    }
  };

  return (
    <div className={`ai-assistant ${isOpen ? 'open' : ''}`}>
      <div className="ai-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="ai-icon">🤖</span>
        {isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
      </div>
      
      {isOpen && (
        <div className="ai-content">
          <div className="ai-selector">
            <button 
              className={activeAI === 'copilot' ? 'active' : ''} 
              onClick={() => setActiveAI('copilot')}
            >
              👨‍✈️ GitHub Copilot
            </button>
            <button 
              className={activeAI === 'chatgpt' ? 'active' : ''} 
              onClick={() => setActiveAI('chatgpt')}
            >
              🤖 ChatGPT
            </button>
          </div>

          <form onSubmit={handleSubmit} className="ai-input">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Ask ${activeAI === 'copilot' ? 'GitHub Copilot' : 'ChatGPT'} anything...`}
            />
            <button type="submit">Send</button>
          </form>

          <div className="ai-responses">
            {responses.map(response => (
              <div key={response.id} className="ai-response">
                <div className="response-header">
                  <span className="ai-type">
                    {response.ai === 'copilot' ? '👨‍✈️ GitHub Copilot' : '🤖 ChatGPT'}
                  </span>
                  <span className="timestamp">{response.timestamp}</span>
                </div>
                <p className="prompt">{response.prompt}</p>
                <p className="response-text">{response.response}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
