import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
  channelName: string | null;
};

function ChatHeader(props: Props) {
  const { channelName } = props;
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          {channelName ? channelName : "null channel"}
        </h3>
      </div>
      <div className="chatHeaderRight">
        <NotificationsIcon className="chatHeaderRightIcon" />
        <PushPinIcon className="chatHeaderRightIcon" />
        <PeopleAltIcon className="chatHeaderRightIcon" />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchIcon className="chatHeaderRightIcon" />
        </div>
        <SendIcon className="chatHeaderRightIcon" />
        <HelpIcon className="chatHeaderRightIcon" />
      </div>
    </div>
  );
}

export default ChatHeader;
