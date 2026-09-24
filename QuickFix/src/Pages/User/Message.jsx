import React, { useState } from "react";
import services from "../../Data/services";
import "../../CSS/UserMessages.css";

function Messages() {
  const [selectedProvider, setSelectedProvider] = useState(services[0]);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "provider",
      text: "Hello! How can I help you?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "I want to know about the service.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "provider",
      text: "Sure! I can provide you with all the details.",
      time: "10:33 AM",
    },
  ]);

  // SEND MESSAGE
  const handleSend = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setMessage("");
  };

  // SEND WITH ENTER KEY
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="messages-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="conversation-list">

        <div className="messages-title">
          <h1>Messages</h1>
          <p>Chat with service providers</p>
        </div>

        <div className="conversation-search">
          <input
            type="text"
            placeholder="Search conversations..."
          />
        </div>

        <div className="providers-list">

          {services.slice(0, 5).map((service) => (

            <div
              className={`conversation ${
                selectedProvider.id === service.id
                  ? "active-conversation"
                  : ""
              }`}
              key={service.id}
              onClick={() => setSelectedProvider(service)}
            >

              <img
                src={service.image}
                alt={service.provider}
              />

              <div className="conversation-info">

                <h3>{service.provider}</h3>

                <p>
                  {service.name}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="chat-section">

        {/* CHAT HEADER */}

        <div className="chat-header">

          <img
            src={selectedProvider.image}
            alt={selectedProvider.provider}
          />

          <div>
            <h2>{selectedProvider.provider}</h2>

            <p>● Online</p>
          </div>

        </div>


        {/* CHAT BODY */}

        <div className="chat-body">

          {messages.map((msg) => (

            <div
              key={msg.id}
              className={`message ${
                msg.sender === "user"
                  ? "user-message"
                  : "provider-message"
              }`}
            >

              <p>{msg.text}</p>

              <span>{msg.time}</span>

            </div>

          ))}

        </div>


        {/* MESSAGE INPUT */}

        <div className="message-input">

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleSend}>
            Send ➤
          </button>

        </div>

      </div>

    </div>
  );
}

export default Messages;