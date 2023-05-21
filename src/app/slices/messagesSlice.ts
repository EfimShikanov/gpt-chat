import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openai } from "../openai";

export const sendUserQuery = createAsyncThunk(
  "messages/sendUserQueryStatus",
  async (query: string, thunkAPI) => {
    thunkAPI.dispatch(addMessage(query));
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
      
    });

    return response.data;
  }
);

interface IMessage {
  role: "assistant" | "user";
  content: string;
}

interface IMessagesSlice {
  messages: Array<IMessage>;
}

const initialState: IMessagesSlice = {
  messages: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages = [
        ...state.messages,
        { role: "user", content: action.payload },
      ];
    },
    removeMessages: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendUserQuery.fulfilled, (state, action) => {
      if (action.payload.choices[0].message?.content) {
        state.messages = [
          ...state.messages,
          {
            role: "assistant",
            content: action.payload.choices[0].message?.content,
          },
        ];
      }
    });
  },
});

export const { addMessage, removeMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
