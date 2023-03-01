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
