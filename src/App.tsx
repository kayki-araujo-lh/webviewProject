import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import ENV from './.env';
import {LoadingWebView, WebViewTabs} from './components';
import {requestUserPermission} from './utils';
import messaging from '@react-native-firebase/messaging';

const container: StyleProp<ViewStyle> = {
  flex: 1,
};

const App = () => {
  useEffect(() => {
    requestUserPermission();
    messaging().getToken().then(console.log);
  }, []);

  return ENV.showTabs ? (
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
};
export default App;
