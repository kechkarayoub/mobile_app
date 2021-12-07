import * as Localization from 'expo-localization';
import {supported_languages} from '../../config/global';
import {get} from '../locale';
var current_language = "fr";
var locale_splited = Localization.locale.split("-")[0];
if(supported_languages.indexOf(locale_splited) !== -1){
  current_language = locale_splited;
}
get('currentlanguage', cl => {
  current_language = cl;
});
const initialState = { current_language: current_language }

function changeLanguage(state, action) {
  state = state || initialState;
  let nextState
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      nextState = {
        ...state,
        current_language: action.value
      }
      return nextState
  default:
    return state
  }
}

export default changeLanguage;
