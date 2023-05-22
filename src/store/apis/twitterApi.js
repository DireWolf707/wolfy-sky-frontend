import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export default createApi({
  reducerPath: "twitter",

  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/twitter`,
    credentials: "include",
  }),

  endpoints(builder) {
    return {}
  },
})
