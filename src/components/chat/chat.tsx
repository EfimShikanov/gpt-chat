import React, { memo } from "react";
import { Message, Wrapper } from "./styles";
import { useAppSelector } from "../../app/hooks";

const Chat: React.FC = () => {
  const { messages } = useAppSelector((state) => state.messages);

  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <Message role={message.role} key={`message_${message.role}_${index}`}>
          {message.content}
        </Message>
      );
    });
  };

  return <Wrapper>{renderMessages()}</Wrapper>;
};

export default memo(Chat);
