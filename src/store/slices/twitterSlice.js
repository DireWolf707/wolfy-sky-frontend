import { createSlice } from "@reduxjs/toolkit"

export const twitterSlice = createSlice({
  name: "twitter",

  initialState: {
    containerTopRef: null,
    isTweetModalOpen: false,
    parentTweetList: [],
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
  },
})

export const twitterSliceActions = twitterSlice.actions
