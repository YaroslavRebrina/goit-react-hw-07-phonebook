import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },
//   reducers: {
//     addContact(state, action) {
//       if (state.items.find(contact => contact.name === action.payload.name)) {
//         alert(`${action.payload.name} is alrady in contacts.`);
//         return;
//       }

//       state.items.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64671e34ba7110b663afcb4b.mockapi.io/contacts/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contact',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ id, name, phone }) => ({
        url: `/contact`,
        method: 'POST',
        body: { id, name, phone },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation } = contactsApi;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactReducer = contactsSlice.reducer;
