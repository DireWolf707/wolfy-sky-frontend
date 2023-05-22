import { createSlice } from "@reduxjs/toolkit"

export const twitterSlice = createSlice({
  name: "twitter",

  initialState: {
    containerTopRef: null,
    isTweetModalOpen: false
  },

  reducers: {
    setContainerTopRef(state, action) {
      state.containerTopRef = action.payload
    },

    toggleTweetModal(state, action) {
      state.isTweetModalOpen = action.payload
    },
  },
})

export const twitterSliceActions = twitterSlice.actions
