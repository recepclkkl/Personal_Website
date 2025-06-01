const initialState = {
  language: "tr",
};

export const SET_LANGUAGE = "SET_LANGUAGE";

export const setLanguage = (lang) => ({
  type: SET_LANGUAGE,
  payload: lang,
});

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;