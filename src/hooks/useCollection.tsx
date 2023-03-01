import {
  query,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

type ChannelsType = {
  id: string;
  channel: DocumentData;
};

export const useCollection = (data: string) => {
  const [documents, setDocuments] = React.useState<ChannelsType[]>([]);

  const collectionRef = query(collection(db, data));

  React.useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResult: ChannelsType[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResult);
    });
  }, [collectionRef]);

  return { documents };
};
