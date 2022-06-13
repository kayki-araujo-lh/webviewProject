import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {HTTP_PASS, HTTP_USER} from './.env';
import {LeoView} from './components';
import {Credentials} from './http-auth';

const CREDENTIALS: Credentials = {
  user: HTTP_USER,
  pass: HTTP_PASS,
};

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <LeoView credentials={CREDENTIALS} />
    </SafeAreaView>
  );
};

export default App;
