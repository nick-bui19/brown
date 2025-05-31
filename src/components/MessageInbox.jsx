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

//Helper function to discern time format being displayed
function prettyTime(iso) {
  const d = new Date(iso);
  const diffHrs = (Date.now() - d) / 36e5;

  return diffHrs < 24
    ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })          // e.g. “19:45”
    : d.toLocaleDateString([], { month: "short", day: "numeric" });             // e.g. “May 31”
}

export default function MessageInbox() {
  const [openId, setOpenId] = useState(null);
  const unreadCount = messages.filter(
  (m) => localStorage.getItem(`ldr-msg-${m.id}-opened`) !== "true"
).length;

const heading = unreadCount ? `📥 Message Inbox (${unreadCount})`
                            : `📥 Message Inbox`;

  /* LIST MODE */
  if (!openId) {
    return (
      <div className="inbox-wrapper">
        <h1>{heading}</h1>

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
                <span className="msg-time">{prettyTime(m.sentAt)}</span>
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
      <h1>📥 Message Inbox</h1>
      <FullMessage msg={msg} onBack={() => setOpenId(null)} />
    </div>
  );
}