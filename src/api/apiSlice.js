import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.novaposhta.ua/v2.0/json/`,
  }),
  tagTypes: ['OrderInfo'],
  endpoints: (builder) => ({
    getOrderInfo: builder.mutation({
      query: ttnNumber => ({
        url: '',
        method: 'POST',
        body: {
          apiKey: "22ef24fd53de6de7a28b5d8355220d26", // Ваші додаткові властивості
          modelName: "TrackingDocument",
          calledMethod: "getStatusDocuments",
          methodProperties: {
            Documents: [
              {
                DocumentNumber: ttnNumber,
              },
            ],
          },
        }
      }),
      invalidatesTags: ['OrderInfo']
    })
  })
});

export const { useGetOrderInfoMutation } = apiSlice;