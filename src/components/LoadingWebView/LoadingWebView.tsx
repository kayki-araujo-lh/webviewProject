import {HTTP_URL} from '../../.env';
import React, {FC, useRef, useState} from 'react';
import {BackHandler, StyleProp, View, ViewStyle} from 'react-native';
import WebView from 'react-native-webview';
import {WebViewNavigationEvent} from 'react-native-webview/lib/WebViewTypes';
import {buildHeader, Credentials} from '../../http-auth';
import {LoadingScreen} from './LoadingScreen';

export type LoadingWebViewProps = {
  credentials: Credentials;
  style?: StyleProp<ViewStyle>;
};

export const LoadingWebView: FC<LoadingWebViewProps> = ({
  credentials,
  style,
}) => {
  const headers = buildHeader(credentials);
  const WebViewRef = useRef<WebView>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(HTTP_URL);
  const handleStart = (event: WebViewNavigationEvent) => {
    setIsLoading(true);
  };

  const goBack = (): boolean | null | undefined => {
    WebViewRef.current?.goBack();
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', goBack);
  return (
    <View
      style={
        style ?? {
          flex: 1,
        }
      }>
      <WebView
        ref={WebViewRef}
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
