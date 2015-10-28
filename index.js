'use strict';

let React = require('react-native');
let { Platform, LinkingIOS } = React;
let AndroidIntent = React.NativeModules.UniversalIntent;


class UniversalIntent {

  static openURL(url) {
    if (Platform.OS === 'ios') {
      LinkingIOS.openURL(url);
    } else if (Platform.OS === 'android') {
      AndroidIntent.openURL(url);
    }
  }

}

module.exports = UniversalIntent;