// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hospApi = createApi({
  reducerPath: 'hospApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/hospitals' }),
  endpoints: (builder) => ({
    getAllHospitals: builder.query({
      query: () => ``,
    }),
    addHospital: builder.mutation({
      query:(newHospital)=>{
        return {
          url:``,
          method:'POST',
          body:newHospital
        }
      }
    }),
    addBeds: builder.mutation({
      query:(details)=>{
        return {
          url:`/${details.selectedHospitalId}/beds`,
          method:'PUT',
          body:details.beds
        }
      }
    }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllHospitalsQuery,useAddHospitalMutation, useAddBedsMutation
 } = hospApi
 export default hospApi.reducer