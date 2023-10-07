import { useState, useEffect } from "react";

import {
  doc,
  query,
  collection,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getAuthFromStorage } from "../utils/storage";

const useMessages = (url) => {
  const [messagesList, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [talkingToUid, setTalkingToUid] = useState(null);

  useEffect(() => {
    console.log(talkingToUid)
    if (talkingToUid != null) {
      setLoadingMessages(true);
      var unsubscribe = onSnapshot(
        query(
          collection(db, "chats", getAuthFromStorage().uuid, "talkedTo", talkingToUid, "mesaje"),
          orderBy("sentTime", "asc")
        ),
        (querySnapshot) => {
          const messages = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setMessages(messages);
          setLoadingMessages(false);
        }
      );
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [talkingToUid]);

  return {messagesList, setTalkingToUid, loadingMessages};
};

export default useMessages;
