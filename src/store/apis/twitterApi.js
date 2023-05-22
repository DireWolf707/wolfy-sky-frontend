import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export default createApi({
  reducerPath: "twitter",

  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/twitter`,
    credentials: "include",
  }),

  endpoints(builder) {
    return {
      getFeed: builder.query({
        query: () => ({
          url: "/feed",
          method: "GET",
        }),
      }),

      getNotifications: builder.query({
        query: () => ({
          url: "/notifications",
          method: "GET",
        }),
      }),

      getPublicProfile: builder.query({
        query: ({ userId }) => ({
          url: `/public-profile/${userId}`,
          method: "GET",
        }),
      }),

      getTweet: builder.query({
        query: ({ tweetId }) => ({
          url: `/tweet/${tweetId}`,
          method: "GET",
        }),
      }),

      tweet: builder.mutation({
        query: ({ body }) => ({
          url: "/tweet",
          method: "POST",
          body,
        }),
      }),

      like: builder.mutation({
        query: ({ tweetId }) => ({
          url: `/tweet/${tweetId}/like`,
          method: "POST",
        }),
      }),

      unlike: builder.mutation({
        query: ({ tweetId }) => ({
          url: `/tweet/${tweetId}/like`,
          method: "DELETE",
        }),
      }),
    }
  },
})
