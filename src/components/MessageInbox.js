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
            <p>Happy 3 months bb :))))</p>
            <p>I hope you're smiling reading this! We're physically on two opposite ends of Earth right now but mentally I feel so close to you because we're always calling or sending each other updates!</p>
            <p>You call me every day, many days multiple times a day, and I feel so loved, so secure, and so grateful for you. Whether you're just winding down and doing your skincare, driving around getting groceries, or working at coffee shops, you always include me in your day. Thank you for letting me call you while I do literally anything and everything too!</p>
            <p>When you look at me on call and say I don't like it, I actually secretly like it. And when you say my hair s pet-able, um it makes me start daydreaming about you petting my hair a little bit. Just a little though. </p>
            <p>Just like you said the first month, I'm so happy to get to know you more every day, and I'm excited to see where life will take us from here. One thing I'm certain about though is I'm thinking of you, I'm there for you, and I'm counting down the days until I see you again. Love you!!! And don't worry Brown I didn't forget about you. Love you too. Muahhh</p>
            <p>- Tít</p>
            <p> </p>
            <p>P/s: This website's features:</p>
            <p>1. A Countdown Timer, so we can count down when we see each other again.</p>
            <p>2. Current times for both of us!! </p>
            <p>3. A Time Sync Slider, in case you need to convert Utah/New York time to Hanoi time (tell me when you need the New York time and I'll adjust it)</p>
            <p>4. Ur Vietnamese word of the day because I know Vietnamese is hard and I want u to be interested and also why not hehe.</p>
            <p>5. Photos of us this month</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageInbox;
