import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import {supported_languages} from 'src/config/global';

const locale_storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    async current_language(/*params*/) {
      var current_language = "fr";
      var locale_splited = Localization.locale.split("-")[0];
      if(supported_languages.indexOf(locale_splited) !== -1){
        current_language = locale_splited;
      }
      return current_language;
      // let {
      //   id,
      //   syncParams: { extraFetchOptions, someFlag }
      // } = params;
      // const response = await fetch('user/?id=' + id, {
      //   ...extraFetchOptions
      // });
      // const responseText = await response.text();
      // console.log(`user${id} sync resp: `, responseText);
      // const json = JSON.parse(responseText);
      // if (json && json.user) {
      //   storage.save({
      //     key: 'user',
      //     id,
      //     data: json.user
      //   });
      //   if (someFlag) {
      //     // do something for some custom flag
      //   }
      //   // return required data when succeed
      //   return json.user;
      // } else {
      //   // throw error when failed
      //   throw new Error(`error syncing user${id}`));
      // }
    }
  }
});

export const set = (key, val, expires) => {
  locale_storage.save({
    key: key,
    data: val,
    expires: expires || null,
  });
}
export const get = async (key, callback) => {

  await locale_storage.load({
    key: key,
    autoSync: true,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: {
      },
      someFlag: true
    }
  })
  .then(ret => {
    if(callback){
      callback(ret);
    }
    return ret;
  })
  .catch(err => {
      console.log("err.name: ", err.name);
    switch (err.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });
}

export const remove = (key) => {
  locale_storage.remove({
    key: key,
  });
}

export const clear = () => {
  locale_storage.clearMap();
}

export default locale_storage;
