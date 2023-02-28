import React from "react";
import "./ChatMessage.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = () => {
  return (
    <div className="message">
      <AccountCircleIcon />
      <div className="messageInfo">
        <h4>
          namikinokurage
          <span className="messageTimestamp">2023/02/28</span>
        </h4>
        メッセージ本文
      </div>
    </div>
  );
};

export default ChatMessage;
