import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput, Avatar, Conversation,
} from "@chatscope/chat-ui-kit-react";

const Chat = () => {
    return (
        <div style={{ position: "relative", height: "500px" }}>
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

export default Chat;