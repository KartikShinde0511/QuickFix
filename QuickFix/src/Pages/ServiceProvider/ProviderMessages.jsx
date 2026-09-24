import React, { useState } from "react";
import "../../CSS/ProviderMessages.css";

function ProviderMessages() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      service: "AC Repair",
      lastMessage: "Can you come tomorrow at 11 AM?",
      time: "10:42 AM",
      unread: 2,
      avatar: "👨",
      online: true,
      messages: [
        {
          sender: "customer",
          text: "Hello, I need AC repair service.",
          time: "10:35 AM",
        },
        {
          sender: "provider",
          text: "Sure. What seems to be the problem?",
          time: "10:37 AM",
        },
        {
          sender: "customer",
          text: "The AC is not cooling properly.",
          time: "10:39 AM",
        },
        {
          sender: "customer",
          text: "Can you come tomorrow at 11 AM?",
          time: "10:42 AM",
        },
      ],
    },

    {
      id: 2,
      name: "Priya Sharma",
      service: "Home Cleaning",
      lastMessage: "Thank you for confirming.",
      time: "Yesterday",
      unread: 0,
      avatar: "👩",
      online: true,
      messages: [
        {
          sender: "customer",
          text: "Hi, I booked a home cleaning service.",
          time: "Yesterday",
        },
        {
          sender: "provider",
          text: "Yes, your booking is confirmed.",
          time: "Yesterday",
        },
        {
          sender: "customer",
          text: "Thank you for confirming.",
          time: "Yesterday",
        },
      ],
    },

    {
      id: 3,
      name: "Amit Shah",
      service: "Plumbing",
      lastMessage: "I will be available after 5 PM.",
      time: "Yesterday",
      unread: 1,
      avatar: "👨‍💼",
      online: false,
      messages: [
        {
          sender: "customer",
          text: "I have a leaking kitchen pipe.",
          time: "Yesterday",
        },
        {
          sender: "provider",
          text: "I can visit your location today.",
          time: "Yesterday",
        },
        {
          sender: "customer",
          text: "I will be available after 5 PM.",
          time: "Yesterday",
        },
      ],
    },

    {
      id: 4,
      name: "Sneha Joshi",
      service: "Electrical Repair",
      lastMessage: "Is the booking still confirmed?",
      time: "Monday",
      unread: 0,
      avatar: "👩‍💼",
      online: false,
      messages: [
        {
          sender: "customer",
          text: "Is the booking still confirmed?",
          time: "Monday",
        },
        {
          sender: "provider",
          text: "Yes, your booking is confirmed.",
          time: "Monday",
        },
      ],
    },
  ]);

  const currentChat = conversations[selectedChat];

  const filteredConversations = conversations.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim()) return;

    const updatedConversations = [...conversations];

    updatedConversations[selectedChat].messages.push({
      sender: "provider",
      text: message,
      time: "Just now",
    });

    updatedConversations[selectedChat].lastMessage = message;
    updatedConversations[selectedChat].time = "Just now";

    setConversations(updatedConversations);
    setMessage("");
  };

  const handleSelectChat = (index) => {
    setSelectedChat(index);

    const updatedConversations = [...conversations];

    updatedConversations[index].unread = 0;

    setConversations(updatedConversations);
  };

  return (
    <div className="provider-messages-page">

      {/* HEADER */}
      <div className="provider-messages-header">

        <div>
          <span className="provider-messages-label">
            COMMUNICATION
          </span>

          <h1>Messages</h1>

          <p>
            Communicate with your customers and manage service conversations.
          </p>
        </div>

        <div className="provider-messages-header-icon">
          💬
        </div>

      </div>


      {/* MESSAGE CONTAINER */}
      <div className="provider-messages-container">

        {/* LEFT CHAT LIST */}
        <div className="provider-chat-list">

          <div className="provider-chat-list-header">

            <div>
              <h2>Conversations</h2>

              <span>
                {conversations.length} conversations
              </span>
            </div>

          </div>


          {/* SEARCH */}
          <div className="provider-chat-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          {/* CHAT ITEMS */}
          <div className="provider-chat-items">

            {filteredConversations.map((chat) => {

              const originalIndex = conversations.findIndex(
                (item) => item.id === chat.id
              );

              return (
                <button
                  className={`provider-chat-item ${
                    selectedChat === originalIndex
                      ? "provider-chat-active"
                      : ""
                  }`}
                  key={chat.id}
                  onClick={() =>
                    handleSelectChat(originalIndex)
                  }
                >

                  <div className="provider-chat-avatar">

                    {chat.avatar}

                    {chat.online && (
                      <span className="provider-online-dot"></span>
                    )}

                  </div>


                  <div className="provider-chat-info">

                    <div className="provider-chat-name-row">

                      <h3>{chat.name}</h3>

                      <span>{chat.time}</span>

                    </div>

                    <p>{chat.service}</p>

                    <div className="provider-chat-message-row">

                      <small>
                        {chat.lastMessage}
                      </small>

                      {chat.unread > 0 && (
                        <b>
                          {chat.unread}
                        </b>
                      )}

                    </div>

                  </div>

                </button>
              );
            })}

          </div>

        </div>


        {/* RIGHT CHAT */}
        <div className="provider-chat-window">

          {/* CHAT HEADER */}
          <div className="provider-chat-window-header">

            <div className="provider-current-avatar">

              {currentChat.avatar}

              {currentChat.online && (
                <span className="provider-online-dot"></span>
              )}

            </div>


            <div className="provider-current-user">

              <h2>
                {currentChat.name}
              </h2>

              <p>
                {currentChat.online
                  ? "● Online"
                  : "Last seen recently"}
              </p>

            </div>


            <div className="provider-chat-service">

              <span>Service</span>

              <strong>
                {currentChat.service}
              </strong>

            </div>

          </div>


          {/* MESSAGES */}
          <div className="provider-message-area">

            <div className="provider-chat-date">
              Today
            </div>

            {currentChat.messages.map((msg, index) => (

              <div
                key={index}
                className={`provider-message ${
                  msg.sender === "provider"
                    ? "provider-message-sent"
                    : "provider-message-received"
                }`}
              >

                <div className="provider-message-bubble">

                  <p>
                    {msg.text}
                  </p>

                  <span>
                    {msg.time}
                  </span>

                </div>

              </div>

            ))}

          </div>


          {/* MESSAGE INPUT */}
          <div className="provider-message-input-area">

            <button className="provider-attach-btn">
              📎
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              className="provider-send-btn"
              onClick={handleSend}
            >
              ➤
            </button>

          </div>

        </div>

      </div>


      {/* QUICK INFO */}
      <div className="provider-message-info">

        <div className="provider-message-info-item">

          <span>💬</span>

          <div>
            <strong>
              Customer Communication
            </strong>

            <p>
              Respond quickly to customer questions.
            </p>
          </div>

        </div>


        <div className="provider-message-info-item">

          <span>📅</span>

          <div>
            <strong>
              Booking Related
            </strong>

            <p>
              Discuss appointment details with customers.
            </p>
          </div>

        </div>


        <div className="provider-message-info-item">

          <span>⚡</span>

          <div>
            <strong>
              Quick Response
            </strong>

            <p>
              Keep customers updated about their service.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProviderMessages;