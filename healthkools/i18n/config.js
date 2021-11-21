
//import {getLocales} from 'react-native-localize';
//import i18n from "i18n-js";
//import {Localization} from "expo";
import ar from './translations/ar/translations.json';
import en from './translations/en/translations.json';
import fr from './translations/fr/translations.json';

//i18n.translations = {ar, en, fr};
//i18n.locale = "en";
//export default i18n;
//import i18n from "ex-react-native-i18n";
//import { Localization } from "expo-localization";

//I18n.translations = {
//  ar, en, fr
//};

export const fallback = "en";
export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => ({translations: require('./translations/en/translations.json')}),
        // en is default locale in Moment
        momentLocaleLoader: () => Promise.resolve(),
    },
    ar: {
        name: "عربي",
        translationFileLoader: () => ({translations: require('./translations/ar/translations.json')}),
        momentLocaleLoader: () => import('moment/locale/ar'),
    },
    fr: {
        name: "Français",
        translationFileLoader: () => ({translations: require('./translations/fr/translations.json')}),
        momentLocaleLoader: () => import('moment/locale/fr'),
    },
};
export const defaultNamespace = "translations";
export const namespaces = [
    "translations",
];
