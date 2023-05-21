import React, { memo, useState } from "react";
import Input from "../../components/input/input";
import { Wrapper } from "./styles";
import Chat from "../../components/chat/chat";
import Button from "../../components/button/button";
import { useAppDispatch } from "../../app/hooks";
import { sendUserQuery } from "../../app/slices/messagesSlice";

const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  
  const submitHandler = () => {
    dispatch(sendUserQuery(inputValue));
    setInputValue("");
  };

  return (
    <Wrapper>
      <Chat />
      <form
        className="inputBox"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <Input value={inputValue} onChange={setInputValue} />
        <Button onClick={submitHandler} />
      </form>
    </Wrapper>
  );
};

export default memo(Main);
