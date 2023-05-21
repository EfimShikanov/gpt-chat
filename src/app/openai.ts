import { Configuration, OpenAIApi } from "openai";
import { API_KEY } from "./constants";

const configuration = new Configuration({
  apiKey: API_KEY,
});

export const openai = new OpenAIApi(configuration);
