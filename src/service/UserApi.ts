// import { User } from "@/types/User";
// import { api } from "./api";

// export const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getUsers: builder.query<User[], void>({
//       query: () => "users",
//       providesTags: ["Users"],
//     }),
//   }),
// });

// export const { useGetUsersQuery } = userApi;

// service/api.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/types/User";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = api;
