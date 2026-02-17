// import { User } from "@/types/User";
// import { api } from "../api";

import { User } from "@/types/User";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
