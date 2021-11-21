import i18next from 'i18next';
import { I18nManager as RNI18nManager } from 'react-native';
import { Updates } from 'expo';
import * as config from './config';
import date from './date';
import languageDetector from './language_detector';
import translationLoader from './translation_loader';
const i18n = {
    /**
     * @returns {Promise}
     */
    init: () => {
        return new Promise((resolve, reject) => {
            i18next
                .use(languageDetector)
                .use(translationLoader)
                .init({
                    fallbackLng: config.fallback,
                    ns: config.namespaces,
                    defaultNS: config.defaultNamespace,
                    interpolation: {
                        escapeValue: false,
                        format(value, format) {
                            if (value instanceof Date) {
                                return date.format(value, format);
                            }
                        }
                    },
                }, (error) => {
                    if (error) { return reject(error); }
                    date.init(i18next.language)
                        .then(resolve)
                        .catch(error => reject(error));
                });
        });
    },
    /**
     * @param {string} key
     * @param {Object} options
     * @returns {string}
     */
    t: (key, options) => i18next.t(key, options),
    /**
     * @returns {none}
     */
    set_locale: (language) => {
      i18next.changeLanguage(language);
      const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';
      // RN doesn't always correctly identify native
      // locale direction, so we force it here.
      if (i18next.dir().toUpperCase() !== RNDir) {
          const isLocaleRTL = i18n.dir === 'RTL';
          RNI18nManager.forceRTL(isLocaleRTL);
          // RN won't set the layout direction if we
          // don't restart the app's JavaScript.
          //Updates.reloadFromCache();
      }
    },
    /**
     * @returns {string}
     */
    get locale() { return i18next.language; },
    /**
     * @returns {'LTR' | 'RTL'}
     */
    get dir() {
        return i18next.dir().toUpperCase();
    },
    /**
     * @returns {boolean}
     */
    get isRTL() {
        return RNI18nManager.isRTL;
    },
    /**
     * Similar to React Native's Platform.select(),
     * i18n.select() takes a map with two keys, 'rtl'
     * and 'ltr'. It then returns the value referenced
     * by either of the keys, given the current
     * locale's direction.
     *
     * @param {Object<string,mixed>} map
     * @returns {mixed}
     */
    select(map) {
        const key = this.isRTL ? 'rtl' : 'ltr';
        return map[key];
    }
};
export const set_locale = i18n.set_locale;
export const t = i18n.t;
export default i18n;
