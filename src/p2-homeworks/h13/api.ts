import axios, { AxiosError } from "axios";

const client = axios.create({
  baseURL: "https://neko-cafe-back.herokuapp.com",
});

type ResponseType = {
  errorText: string;
  info: string;
  yourBody: { success: boolean };
  success: boolean;
  yourQuery: {};
};

export const api = {
  updateSuccess: async (success: boolean) => {
    try {
      return (await client.post<ResponseType>("auth/test", { success })).data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return e.response?.data;
      } else {
        console.error("Something went wrong");
      }
    }
  },
};
