import React from "react";
import "./ChatMessage.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ChatMessagesType } from "../../type";

type Props = ChatMessagesType;

const ChatMessage = (props: Props) => {
  const { user, message, timestamp } = props;
  return (
    <div className="message">
      <AccountCircleIcon />
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
