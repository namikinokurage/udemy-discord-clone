import { Timestamp } from "firebase/firestore";

export type InitialUserStateType = {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

export type InitialChannelStateType = {
  channelId: string | null;
  channelName: string | null;
};

export type ChatMessagesType = {
  timestamp: Timestamp;
  message: string;
  user: NonNullable<InitialUserStateType["user"]>;
};
