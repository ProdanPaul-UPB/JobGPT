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

import { useState } from "react";

import lillyIco from "../../../static/logo.png";
import joeIco from "../../../static/logo.png";
import zoeIco from "../../../static/logo.png";
import eliotIco from "../../../static/logo.png";
import akaneIco from "../../../static/logo.png";
import kaiIco from "../../../static/logo.png";
import emilyIco from "../../../static/logo.png";
import patrikIco from "../../../static/logo.png";

import HtmlToReactParser from "html-to-react";
import "./OrgDialog.css";
import ReactDOM from "react-dom/client";

const OrgDialog = () => {
  const [messageInputValue, setMessageInputValue] = useState("");

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);

  // root.render(<p>Hello</p>);

  const width = window.innerWidth - 60;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <MainContainer responsive>
        {/* <df-messenger
          location="europe-west2"
          project-id="dialogtests"
          agent-id="6c8a7e5b-4d00-47aa-b53f-1e26a8f41c70"
          language-code="en"
        >
          <df-messenger-chat-bubble chat-title="Agent2"></df-messenger-chat-bubble>
        </df-messenger> */}

        <div
          id="root"
          dangerouslySetInnerHTML={{
            __html: `<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
            <df-messenger
              location="europe-west3"
              project-id="eco-plating-401216"
              agent-id="36330145-1648-4c17-ba92-ac66b1706e3d"
              language-code="ro">
              <df-messenger-chat
               chat-title="JobGPT">
              </df-messenger-chat>
            </df-messenger>
            <style>
              df-messenger {
                z-index: 999;
                position: fixed;
                bottom: 0;
                right: 0;
                top: 0;
                width: ${width}px;
              }
            </style>`,
          }}
        />

        {/* 
                <ChatContainer>

                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <Avatar src={zoeIco} name="JobGPT" />
                        <ConversationHeader.Content userName="JobGPT" />
                        <ConversationHeader.Actions>
                            <InfoButton />
                        </ConversationHeader.Actions>
                    </ConversationHeader>

                    <MessageList>

                        <MessageSeparator content="Saturday, 30 November 2019" />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={zoeIco} name="Zoe" />
                        </Message>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "single"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={zoeIco} name="Zoe" />
                        </Message>

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={zoeIco} name="Zoe" />
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={() => setMessageInputValue("")} />
                </ChatContainer> */}
      </MainContainer>
    </div>
  );
};

export default OrgDialog;
