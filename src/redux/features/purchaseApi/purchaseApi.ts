import { baseApi } from "../../api/baseApi";

const purchaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPurchase: builder.query({
      query: () => ({
        url: "/purchase",
        method: "GET",
      }),
    }),
    getSingleCoupon: builder.query({
      query: (id) => ({
        url: `/purchase/single/${id}`,
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
  useGetSingleCouponQuery,
} = purchaseApi;
