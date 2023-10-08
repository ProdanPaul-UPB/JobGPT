import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ExpansionPanel,
  Avatar,
  ConversationList,
  Search,
  Sidebar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";

import { useState, useEffect } from "react";

import lillyIco from "../../../static/logo.png";
import zoeIco from "../../../static/logo.png";
import useMessages from "./../../../hooks/useMessages";
import {
  doc,
  query,
  collection,
  orderBy,
  onSnapshot,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuthFromStorage } from "../../../utils/storage";
import { getAllStudents } from "../../../api/students";
import useFetch from "../../../hooks/useFetch";

const OrgChat = () => {
  let { messagesList, setTalkingToUid, loadingMessages } = useMessages();

  const [messageInputValue, setMessageInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [students, setStudents] = useState([]);
  const [activeConvo, setActiveConvo] = useState(null);
  const [loading, setLoading] = useState(false);

  let isLoggedIn = getAuthFromStorage() != null;

  function sendMessage(toUid) {
    console.log(toUid);
    addDoc(
      collection(
        db,
        "chats",
        getAuthFromStorage().uuid,
        "talkedTo",
        toUid,
        "mesaje"
      ),
      {
        content: messageInputValue,
        direction: "outgoing",
        sentTime: serverTimestamp(),
      }
    );

    // Add Doc also for the other user
    addDoc(
      collection(
        db,
        "chats",
        toUid,
        "talkedTo",
        getAuthFromStorage().uuid,
        "mesaje"
      ),
      {
        content: messageInputValue,
        direction: "incoming",
        sentTime: serverTimestamp(),
      }
    );

    setMessageInputValue("");
  }

  const studentsAll = useFetch(getAllStudents, {}, true);

  // Use effect for activeConvo
  useEffect(() => {
    if (activeConvo && isLoggedIn) {
      setTalkingToUid(activeConvo.userId);
    }
  }, [activeConvo]);

  useEffect(() => {
    setLoading(loadingMessages);
  }, [loadingMessages]);

  useEffect(() => {
    if (studentsAll.data && studentsAll.data.students && isLoggedIn) {
      setStudents(studentsAll.data.students);

      if (activeConvo == null && studentsAll.data.students.length > 1) {
        setActiveConvo(studentsAll.data.students[0]);
      }
    }
  }, [studentsAll]);

  useEffect(() => {
    setMessages(messagesList);
  }, [messagesList]);

  // Check if the user is logged in
  if (!isLoggedIn) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <MainContainer responsive>
          <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
          </Sidebar>
          <div>You are not logged in!</div>
        </MainContainer>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>
            {students &&
              students.map((student) => {
                console.log(student.userId);
                console.log(getAuthFromStorage());
                if (student.userId != getAuthFromStorage().uuid) {
                  return (
                    <Conversation
                      key={student.userId}
                      onClick={() => {
                        setActiveConvo(student);
                      }}
                      name={student.lastname + " " + student.firstname}
                      lastSenderName={
                        student.lastname + " " + student.firstname
                      }
                      info="Yes i can do it for you"
                    >
                      <Avatar
                        src={lillyIco}
                        name={student.lastname + " " + student.firstname}
                        status="available"
                      />
                    </Conversation>
                  );
                }
              })}
          </ConversationList>
        </Sidebar>

        {/* Chat container */}
        {!activeConvo ? (
          <div style={{ width: "100%", height: "100%" }}>
            {students.length > 1 ? "No active conversation" : "No students"}
          </div>
        ) : (
          <>
            {loading ? (
              <div style={{ width: "100%", height: "100%" }}>Loading</div>
            ) : (
              <ChatContainer>
                <ConversationHeader>
                  <ConversationHeader.Back />
                  <Avatar
                    src={zoeIco}
                    name={activeConvo.lastname + " " + activeConvo.firstname}
                  />
                  <ConversationHeader.Content
                    userName={
                      activeConvo.lastname + " " + activeConvo.firstname
                    }
                    info="Active 10 mins ago"
                  />
                  <ConversationHeader.Actions>
                    <VoiceCallButton />
                    <VideoCallButton />
                    <InfoButton />
                  </ConversationHeader.Actions>
                </ConversationHeader>
                {/* Main Messages */}

                <MessageList
                // typingIndicator={<TypingIndicator content="Zoe is typing" />}
                >
                  {/* <MessageSeparator content="Saturday, 30 November 2019" /> */}

                  {messages.map((msg) => {
                    return (
                      <Message
                        model={{
                          message: msg.content,
                          sentTime: "15 mins ago",
                          sender: "Zoe",
                          direction: msg.direction,
                          position: "single",
                        }}
                      >
                        <Avatar src={zoeIco} name="Zoe" />
                      </Message>
                    );
                  })}
                </MessageList>
                <MessageInput
                  value={messageInputValue}
                  onChange={(val) => {
                    setMessageInputValue(val);
                  }}
                  onSend={() => {
                    sendMessage(activeConvo.userId);
                  }}
                />
              </ChatContainer>
            )}
          </>
        )}
      </MainContainer>
    </div>
  );
};

export default OrgChat;
