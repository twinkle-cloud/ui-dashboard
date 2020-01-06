/*
 * @Author: duchengdong
 * @Date: 2019-09-10 12:04:26
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-12-21 19:48:46
 * @Description: 
 */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const actionTypes = {
  SetLanguage: "i18n/SET_LANGUAGE"
};

const initialState = {
  lang: "zh"
};

export const reducer = persistReducer(
  { storage, key: "i18n" },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SetLanguage:
        return { ...state, lang: action.payload.lang };

      default:
        return state;
    }
  }
);

export const actions = {
  setLanguage: lang => ({ type: actionTypes.SetLanguage, payload: { lang } })
};
