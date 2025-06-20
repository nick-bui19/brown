import React, { useEffect, useState } from "react";
import "./MessageInbox.css";

export default function MessageCard({ msg }) {
  const storageKey = `ldr-msg-${msg.id}-opened`;
  const [opened, setOpened]  = useState(
    () => localStorage.getItem(storageKey) === "true"
  );
  const [isOpen, setIsOpen]  = useState(false);

  // first time she really opens → persist “opened”
  useEffect(() => {
    if (isOpen && !opened) {
      setOpened(true);
      localStorage.setItem(storageKey, "true");
    }
  }, [isOpen, opened, storageKey]);

  const previewLine = msg.title || msg.paragraphs[0];

  /* ---------------- UI ---------------- */
  if (!isOpen) {
    return (
      <button
        className={`message-toggle ${opened ? "read" : "unread"}`}
        onClick={() => setIsOpen(true)}
      >
        {opened ? previewLine : <strong>📩 {previewLine}</strong>}
      </button>
    );
  }

  return (
    <div className="message-box">
      {msg.paragraphs.map((p, i) =>
        p.trim() ? <p key={i}>{p}</p> : <br key={i} />
      )}

      <button className="back-btn" onClick={() => setIsOpen(false)}>
        ⬅ Back to inbox
      </button>
    </div>
  );
}   