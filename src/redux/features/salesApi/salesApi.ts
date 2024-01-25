import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSales: builder.mutation({
      query: (userInfo) => ({
        url: "/sales/create",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateSalesMutation } = salesApi;
