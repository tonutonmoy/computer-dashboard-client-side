import { baseApi } from "../../api/baseApi";

const servicingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServicing: builder.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    createServicing: builder.mutation({
      query: (userInfo) => ({
        url: "/service/create",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetServicingQuery, useCreateServicingMutation } =
  servicingApi;
