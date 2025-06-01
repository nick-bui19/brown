import React, { useState } from "react";
import messages from "../data/messages";
import "./MessageInbox.css";

//Helper function to discern time format being displayed
function prettyTime(iso) {
  const d = new Date(iso);
  const diffHrs = (Date.now() - d) / 36e5;

  return diffHrs < 24
    ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })          // e.g. “19:45”
    : d.toLocaleDateString([], { month: "short", day: "numeric" });             // e.g. “May 31”
}

/**
 * When a message is “expanded,” we render this block inline immediately below its title.
 * onClose() will collapse it (setOpenId(null)).
 */
function InlineFullMessage({ msg, onClose }) {
  return (
    <div className="inline-full-message">
      <div className="message-box-inline">
        {msg.paragraphs.map((p, i) =>
          p.trim() ? <p key={i}>{p}</p> : <br key={i} />
        )}
      </div>
    </div>
  );
}

export default function MessageInbox() {
  const [openId, setOpenId] = useState(null);

  // Count how many messages have not been marked “opened” in localStorage
  const unreadCount = messages.filter(
    (m) => localStorage.getItem(`ldr-msg-${m.id}-opened`) !== "true"
  ).length;

  const heading = unreadCount
    ? `📥 Message Inbox (${unreadCount})`
    : `📥 Message Inbox`;

  return (
    <div className="inbox-wrapper">
      <h1>{heading}</h1>

      <div className="message-list">
        {messages.map((m) => {
          const opened = localStorage.getItem(`ldr-msg-${m.id}-opened`) === "true";
          const isExpanded = openId === m.id;

          return (
            <React.Fragment key={m.id}>
              <button
                className={`msg-btn ${opened ? "read" : "unread"}`}
                onClick={() => {
                  if (openId === m.id) {
                    // If you click again on the same message, collapse it
                    setOpenId(null);
                  } else {
                    // Otherwise expand this message
                    setOpenId(m.id);
                    localStorage.setItem(`ldr-msg-${m.id}-opened`, "true");
                  }
                }}
              >
                {opened ? (
                  <span>{m.title}</span>
                ) : (
                  <strong>📩 {m.title}</strong>
                )}
                <span className="msg-time">{prettyTime(m.sentAt)}</span>
              </button>

              {isExpanded && (
                <InlineFullMessage
                  msg={m}
                  onClose={() => setOpenId(null)}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
