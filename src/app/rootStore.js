import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../store/app";

export const rootStore = configureStore({
  reducer: {
    app: appReducer,
  },
});
