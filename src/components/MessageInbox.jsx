import React, { useState } from "react";
import messages from "../data/messages";
import "./MessageInbox.css";

/* Single message view (pulled out of MessageCard for clarity) */
function FullMessage({ msg, onBack }) {
  return (
    <>
      <button className="back-btn" onClick={onBack}>
        ⬅ Back to inbox
      </button>

      <div className="message-box">
        {msg.paragraphs.map((p, i) =>
          p.trim() ? <p key={i}>{p}</p> : <br key={i} />
        )}
      </div>
    </>
  );
}

export default function MessageInbox() {
  const [openId, setOpenId] = useState(null);

  /* ---------- LIST MODE ---------- */
  if (!openId) {
    return (
      <div className="inbox-wrapper">
        <h2>📥 Message Inbox</h2>

        <div className="message-list">
          {messages.map((m) => {
            /* read/unread taken from localStorage */
            const opened =
              localStorage.getItem(`ldr-msg-${m.id}-opened`) === "true";

            return (
              <button
                key={m.id}
                className={`msg-btn ${opened ? "read" : "unread"}`}
                onClick={() => setOpenId(m.id)}
              >
                {opened ? m.title : <strong>📩 {m.title}</strong>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ---------- FULL MESSAGE MODE ---------- */
  const msg = messages.find((m) => m.id === openId);

  /* mark as read */
  localStorage.setItem(`ldr-msg-${msg.id}-opened`, "true");

  return (
    <div className="inbox-wrapper">
      <h2>📥 Message Inbox</h2>
      <FullMessage msg={msg} onBack={() => setOpenId(null)} />
    </div>
  );
}