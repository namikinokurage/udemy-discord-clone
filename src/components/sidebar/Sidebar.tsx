import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { useCollection } from "../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");

  const logout = () => {
    auth.signOut();
  };

  const addChannel = async () => {
    const channelName = prompt("新しいチャンネルを作成します");
    if (channelName) {
      await addDoc(collection(db, "channels"), { channelName: channelName });
    }
  };

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon className="sidebarExpandMoreIcon" />
              <h4>テストチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={addChannel} />
          </div>
          <div className="sidebarChannelList">
            {channels.map((channel) => {
              const { id } = channel;
              return <SidebarChannel id={id} channel={channel} key={id} />;
            })}
          </div>
        </div>

        {/* sidebarFooter */}
        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.photo} alt="" onClick={logout} />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
