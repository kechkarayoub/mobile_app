import * as Localization from 'expo-localization';
import {supported_languages} from '../config/global';
import {get} from '../Store/locale';
var current_language = "fr";
var locale_splited = Localization.locale.split("-")[0];
if(supported_languages.indexOf(locale_splited) !== -1){
  current_language = locale_splited;
}
export const get_current_languages = async (callback) => {
  await get('currentlanguage', cl => {
    callback(cl);
  });
};
export const get_initial_route_name = async (callback) => {
  await get('initialroutename', irn => {
    callback(irn);
  });
};
