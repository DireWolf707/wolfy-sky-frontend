import { createSlice } from "@reduxjs/toolkit"

export const twitterSlice = createSlice({
  name: "twitter",

  initialState: {
    containerTopRef: null,
    isTweetModalOpen: false,
    parentTweetList: [],
    feed: null,
  },

  reducers: {
    setContainerTopRef(state, action) {
      state.containerTopRef = action.payload
    },

    toggleTweetModal(state, action) {
      state.isTweetModalOpen = action.payload
    },

    pushParentTweet(state, action) {
      state.parentTweetList.push(action.payload)
    },

    popParentTweet(state, action) {
      state.parentTweetList.pop()
    },

    resetParentTweetList(state, action) {
      state.parentTweetList = []
    },

    setFeed(state, action) {
      if (state.feed) state.feed.push(...action.payload)
      else state.feed = action.payload
    },

    updateFeed(state, action) {
      if (state.feed) state.feed.unshift(action.payload)
      else state.feed = [action.payload]
    },

    unsetFeed(state, action) {
      state.feed = null
    },
  },
})

export const twitterSliceActions = twitterSlice.actions
