import {HTTP_URL} from '../../.env';
import React, {FC, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import WebView from 'react-native-webview';
import {WebViewNavigationEvent} from 'react-native-webview/lib/WebViewTypes';
import {buildHeader, Credentials} from '../../http-auth';
import {LoadingScreen} from './LoadingScreen';

export type LeoViewProps = {
  credentials: Credentials;
  style?: StyleProp<ViewStyle>;
};

export const LeoView: FC<LeoViewProps> = ({credentials, style}) => {
  const headers = buildHeader(credentials);

  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(HTTP_URL);

  const handleStart: (event: WebViewNavigationEvent) => void = event => {
    setUrl(event.nativeEvent.url);
    setIsLoading(true);
  };
  return (
    <View
      style={
        style ?? {
          flex: 1,
        }
      }>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: url,
          headers,
        }}
        onLoadStart={handleStart}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && <LoadingScreen />}
    </View>
  );
};
