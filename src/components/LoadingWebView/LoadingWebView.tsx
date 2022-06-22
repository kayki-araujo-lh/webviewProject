import React, {FC, useRef, useState} from 'react';
import {BackHandler, StyleProp, View, ViewStyle} from 'react-native';
import WebView from 'react-native-webview';
import ENV from '../../.env';
import {buildHeader} from '../../http-auth';
import {LoadingScreen} from './LoadingScreen';

export type LoadingWebViewProps = {
  url?: string;
  style?: StyleProp<ViewStyle>;
};

export const LoadingWebView: FC<LoadingWebViewProps> = ({
  style,
  url: initialURL,
}) => {
  const headers = buildHeader(ENV.credentials);

  const WebViewRef = useRef<WebView>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(initialURL ?? ENV.url);

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
        onError={console.log}
        onShouldStartLoadWithRequest={e => {
          setUrl(e.url);
          return false;
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
      {isLoading && <LoadingScreen />}
    </View>
  );
};
