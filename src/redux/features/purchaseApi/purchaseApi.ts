import { baseApi } from "../../api/baseApi";

const purchaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPurchase: builder.query({
      query: () => ({
        url: "/purchase",
        method: "GET",
      }),
    }),
    getSinglePurchase: builder.query({
      query: (email) => ({
        url: `/purchase/${email}`,
        method: "GET",
      }),
    }),
    createPurchase: builder.mutation({
      query: (userInfo) => ({
        url: "/purchase/create",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useCreatePurchaseMutation,
  useGetPurchaseQuery,
  useGetSinglePurchaseQuery,
} = purchaseApi;
