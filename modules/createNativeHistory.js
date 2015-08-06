import React from 'react-native';
import createHistory from './createHistory';

var { AsyncStorage } = React;

var DefaultStorageKey = '@@ReactRouterNativeHistory';

function saveState(key, state, callback) {
  AsyncStorage.setItem(key, JSON.stringify(state), callback);
}

function readState(key, callback) {
  AsyncStorage.getItem(key, function (error, json) {
    if (error) {
      callback(error);
    } else {
      try {
        callback(null, JSON.parse(json));
      } catch (error) {
        callback(null, {}); // Ignore invalid JSON.
      }
    }
  });
}

function createNativeHistory(options={}) {
  var { storageKey } = options;

  if (typeof storageKey !== 'string')
    storageKey = DefaultStorageKey;

  var history = createHistory();

  function getCurrentLocation(callback) {
    
  }

  return {
    
  };
}

export default createNativeHistory;
