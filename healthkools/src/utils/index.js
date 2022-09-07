// import * as Localization from 'expo-localization';
// import {supported_languages} from '../config/global';
import {get} from '../Store/locale';
import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
// var current_language = "fr";
// var locale_splited = Localization.locale.split("-")[0];
// if(supported_languages.indexOf(locale_splited) !== -1){
//   current_language = locale_splited;
// }
export const get_current_languages = async (callback) => {
  await get('currentlanguage', cl => {
    callback(cl);
  });
};
export const get_local_number_from_international = (international_number) => {
  try{
    var pu = phoneUtil.parse(international_number);
    var country_code = pu.getCountryCode();
    if(international_number.indexOf("+" + country_code) !== -1){
      return international_number.replace("+" + country_code, "0");
    }
    return international_number.replace(country_code, "0");
  } catch(err){
    return international_number;
  }
};
