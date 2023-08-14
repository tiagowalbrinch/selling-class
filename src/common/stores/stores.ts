import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./modules/authentication/auth"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
export default store
