import { DocumentData } from "firebase/firestore";
import React from "react";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};
const SidebarChannel = (props: Props) => {
  const { channel } = props;
  const { channelName } = channel.channel;
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
