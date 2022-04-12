import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6234a9f6debd056201ea3689.mockapi.io/",
  }),
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts/`,
      providesTags: ["Contacts"],
    }),
    postContact: build.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactApi;
