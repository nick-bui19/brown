import React, { useState } from 'react';
import './MessageInbox.css';

const MessageInbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inbox-wrapper">
      <h2>📥 Message Inbox</h2>

      <div
        className="message-box"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <div className="message-preview">
            <span>📩 You have ONE pending message!!! WOOOOOOO!!! OPEN IT!</span>
          </div>
        ) : (
          <div className="message-content">
            <p>HAPPY THREE MONTHS BB,</p>
            <p>
              I hope you're smiling reading this! We're far away physically but mentally I feel so close to you. Thanks for letting me call you while I do literally anything. I could be eating pho, working, drinking coffee, walking around, complaining. You're there with me through all of my daily activities here in Vietnam. And likewise, thanks for showing me around Utah and always taking me around when you drive around, get groceries, or work at coffee shops. 
              
               Just a little reminder that I'm always thinking of you and counting down the days. You're doing amazing.
            </p>
            <p>–N</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageInbox;
