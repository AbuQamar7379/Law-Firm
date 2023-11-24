import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const CustomInput = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked!", message);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaEnvelope
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#ccc",
        }}
      />
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        style={{
          paddingLeft: "30px",
          paddingRight: "40px",
          height: "40px",
          width: "300px",
        }}
        placeholder="Type your message..."
      />
      <button
        onClick={handleButtonClick}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          height: "40px",
          padding: "0 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaPaperPlane /> Send
      </button>
    </div>
  );
};

export default CustomInput;
