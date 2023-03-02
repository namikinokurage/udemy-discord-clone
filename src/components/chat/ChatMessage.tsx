import React from "react";
import "./ChatMessage.scss";
import { ChatMessagesType } from "../../type";
import { Avatar } from "@mui/material";

type Props = ChatMessagesType;

const ChatMessage = (props: Props) => {
  const { user, message, timestamp } = props;
  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
