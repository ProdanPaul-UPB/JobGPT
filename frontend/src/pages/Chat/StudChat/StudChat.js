import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput, Conversation,
} from "@chatscope/chat-ui-kit-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StudChat = () => {
    return (
        <div style={{ position: "relative", height: "100vh" }}>
            <MainContainer>
                <Conversation name="Lilly" lastSenderName="Lilly" info="Yes, i can do it for you">
                </Conversation>

                <ChatContainer>
                    <MessageList>
                        <Message
                            model={{
                                message: "Hello my friend",
                                sentTime: "just now",
                                sender: "Joe",
                            }}
                        />
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default StudChat;