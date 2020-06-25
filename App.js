/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://foodme.co.nz/',
        }}
      />
    </>
  );
};

export default App;
