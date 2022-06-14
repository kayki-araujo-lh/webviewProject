import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebViewTabs} from './components';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <WebViewTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
