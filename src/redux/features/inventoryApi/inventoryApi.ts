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
    createInventory: builder.mutation({
      query: (userInfo) => ({
        url: "/inventory/create",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateInventoryMutation, useGetInventoryQuery } =
  inventoryApi;
