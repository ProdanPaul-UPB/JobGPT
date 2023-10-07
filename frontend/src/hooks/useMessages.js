import { useState, useEffect } from "react";

import {
    doc,
    query,
    collection,
    orderBy,
    onSnapshot,
  } from "firebase/firestore";
  import { db } from "../firebase/firebase";

const useMessages = (url) => {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    let unsubscribe = onSnapshot(
      query(
        collection(db, "chats", "uid_eu", "talkedTo", "uid1", "mesaje"),
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
      }
    );


    // return () => unsubscribe();s
  }, []);

  return messages;
};

export default useMessages;
