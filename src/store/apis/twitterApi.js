import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export default createApi({
  reducerPath: "twitterApi",

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
          url: `/profile/${userId}`,
          method: "GET",
        }),
      }),

      getTweet: builder.query({
        query: ({ tweetId }) => ({
          url: `/tweet/${tweetId}`,
          method: "GET",
        }),
      }),

      getComments: builder.query({
        query: ({ tweetId }) => ({
          url: `/tweet/${tweetId}/comments`,
          method: "GET",
        }),
      }),

      getFollowRecomendations: builder.query({
        providesTags: ["followRecomendations"],
        query: () => ({
          url: "/recomendations",
          method: "GET",
        }),
      }),

      search: builder.query({
        query: ({ params }) => ({
          url: `/search?${params}`,
          method: "GET",
        }),
      }),

      createTweet: builder.mutation({
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

      follow: builder.mutation({
        invalidatesTags: (resp, err, arg) => (err ? [] : ["followRecomendations"]),
        query: ({ userId }) => ({
          url: `/profile/${userId}/follow`,
          method: "POST",
        }),
      }),

      unfollow: builder.mutation({
        invalidatesTags: (resp, err, arg) => (err ? [] : ["followRecomendations"]),
        query: ({ userId }) => ({
          url: `/profile/${userId}/follow`,
          method: "DELETE",
        }),
      }),
    }
  },
})
