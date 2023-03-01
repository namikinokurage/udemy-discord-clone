import { DocumentData } from "firebase/firestore";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { setChannelInfo } from "../../features/channelSlice";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};
const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  const { channelName } = channel.channel;

  const dispatch = useAppDispatch();
  const onChangeChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
  };

  return (
    <div className="sidebarChannel" onClick={onChangeChannel}>
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
