import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { ChatMessagesType } from "../../type";
import { useSubCollection } from "../../hooks/useSubCollection";

const Chat = () => {
  const [inputText, setInputText] = React.useState<string>("");

  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const setMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // channelsのサブコレクションmessageに入力した情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId), // 本来ならnullをガードするべきだと思うが教材を進めるためスルー
      "messages"
    );

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });

    setInputText("");
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className="chatMessage">
        {messages.map((msg, index) => {
          const { message, user, timestamp }: ChatMessagesType = msg;
          return (
            <ChatMessage
              key={index}
              message={message}
              user={user}
              timestamp={timestamp}
            />
          );
        })}
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form action="">
          <input
            type="text"
            placeholder="Testへメッセージを送信"
            onChange={setMessage}
            value={inputText}
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={sendMessage}
          >
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <RedeemIcon className="chatInputIcon" />
          <GifBoxIcon className="chatInputIcon" />
          <EmojiEmotionsIcon className="chatInputIcon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
