import { legacy_createStore as createStore, combineReducers } from "redux";
import langReducer from "../components/langReducer";

const rootReducer = combineReducers({
  language: langReducer,
});

export const store = createStore(rootReducer);