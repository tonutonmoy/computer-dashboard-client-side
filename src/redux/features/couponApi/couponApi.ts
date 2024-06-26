import { baseApi } from "../../api/baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoupon: builder.query({
      query: () => ({
        url: "/coupon",
        method: "GET",
      }),
      providesTags: ["Coupon"],
    }),
    getSingleCoupon: builder.query({
      query: (code) => ({
        url: `/coupon/single/${code}`,
        method: "GET",
      }),
    }),
    createCoupon: builder.mutation({
      query: (userInfo) => ({
        url: "/coupon/create",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/coupon/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupon"],
    }),
  }),
});

export const {
  useGetCouponQuery,
  useDeleteCouponMutation,
  useCreateCouponMutation,
  useGetSingleCouponQuery,
} = couponApi;
