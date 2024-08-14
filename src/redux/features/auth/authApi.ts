import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    registration: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/registration",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `/auth`,
        method: "GET",
       
      }),
    }),
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: `/auth/UpdateProfile`,
        method: "PUT",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation,useGetUserQuery,useUpdateProfileMutation } = authApi;
