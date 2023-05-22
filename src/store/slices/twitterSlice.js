import { createSlice } from "@reduxjs/toolkit"

export const twitterSlice = createSlice({
  name: "twitter",

  initialState: {
    containerTopRef: null,
  },

  reducers: {
    setContainerTopRef(state, action) {
      state.containerTopRef = action.payload
    },
  },
})

export const twitterSliceActions = twitterSlice.actions
