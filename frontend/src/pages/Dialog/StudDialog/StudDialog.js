import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    MainContainer, Message, MessageInput,
    MessageList, MessageSeparator
} from "@chatscope/chat-ui-kit-react";
import zoeIco from "../../../static/logo.png";
import {useState} from "react";

const StudDialog = () => {

    const [messageInputValue, setMessageInputValue] = useState("");

    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            position: "relative"
        }}>
            <MainContainer responsive>

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
                </ChatContainer>

            </MainContainer>
        </div>
    );
}

export default StudDialog;