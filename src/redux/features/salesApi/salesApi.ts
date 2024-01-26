import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/sales",
        method: "GET",
      }),
    }),
    createSales: builder.mutation({
      query: (userInfo) => ({
        url: "/sales/create",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateSalesMutation, useGetSalesQuery } = salesApi;
