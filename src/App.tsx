import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import ENV from './.env';
import {LoadingWebView, WebViewTabs} from './components';

const container: StyleProp<ViewStyle> = {
  flex: 1,
};

const App = () =>
  ENV.showTabs ? (
    <NavigationContainer>
      <SafeAreaView style={container}>
        <WebViewTabs />
      </SafeAreaView>
    </NavigationContainer>
  ) : (
    <SafeAreaView style={container}>
      <LoadingWebView />
    </SafeAreaView>
  );

export default App;
