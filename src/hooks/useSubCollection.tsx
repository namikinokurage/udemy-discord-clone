import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";
import { ChatMessagesType } from "../type";

export const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = React.useState<ChatMessagesType[]>(
    []
  );

  React.useEffect(() => {
    const collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "asc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: ChatMessagesType[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });

      setSubDocuments(results);
    });
  }, [channelId, collectionName, subCollectionName]);

  return { subDocuments };
};
