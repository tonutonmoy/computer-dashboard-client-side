import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
    }),
    createReview: builder.mutation({
      query: (payload) => ({
        url: `/review/`,
        method: "POST",
        body: payload, // Assuming you're using Fetch
        // If using Axios, replace `body` with `data`
      }),
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewQuery } = reviewApi;
