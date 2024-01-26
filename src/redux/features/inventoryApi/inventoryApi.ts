import { baseApi } from "../../api/baseApi";

const inventoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInventory: builder.query({
      query: (query) => ({
        url: `/inventory?${query}`,
        method: "GET",
        force: true,
      }),
    }),
    getSingleInventory: builder.query({
      query: (id) => ({
        url: `/inventory/singleInventory/${id}`,
        method: "GET",
        force: true,
      }),
    }),
    createInventory: builder.mutation({
      query: (userInfo) => ({
        url: "/inventory/create",
        method: "POST",
        body: userInfo,
      }),
    }),
    updateInventory: builder.mutation({
      query: (userInfo) => {
        return {
          url: `/inventory/update/${userInfo?.id}`,
          method: "PUT",
          body: userInfo,
        };
      },
    }),
  }),
});

export const {
  useCreateInventoryMutation,
  useGetInventoryQuery,
  useGetSingleInventoryQuery,
  useUpdateInventoryMutation,
} = inventoryApi;
