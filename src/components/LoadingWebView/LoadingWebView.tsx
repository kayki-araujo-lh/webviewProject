import React, {FC, useEffect, useRef, useState} from 'react';
import {BackHandler, StyleProp, View, ViewStyle} from 'react-native';
import WebView from 'react-native-webview';
import {HTTP_URL} from '../../.env';
import {buildHeader, Credentials} from '../../http-auth';
import {LoadingScreen} from './LoadingScreen';

export type LoadingWebViewProps = {
  credentials: Credentials;
  url?: string;
  style?: StyleProp<ViewStyle>;
};

export const LoadingWebView: FC<LoadingWebViewProps> = ({
  credentials,
  style,
  url: initialURL,
}) => {
  const headers = buildHeader(credentials);

  const WebViewRef = useRef<WebView>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(initialURL ?? HTTP_URL);

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
        onShouldStartLoadWithRequest={e => {
          setUrl(e.url);
          return false;
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && <LoadingScreen />}
    </View>
  );
};
