import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import ENV from '../../.env';

enum LoadingType {
  Splash,
  Indicator,
}

const getLoadingType = (() => {
  const generator = (function* () {
    yield LoadingType.Splash;
    while (true) yield LoadingType.Indicator;
  })();
  return () => generator.next().value;
})();

export const LoadingScreen: FC = () => (
  <View
    style={{
      flex: 1,
      position: 'absolute',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      backgroundColor: 'white',
    }}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {
        {
          [LoadingType.Splash]: <ENV.splashLogo width={250} height={250} />,
          [LoadingType.Indicator]: (
            <ActivityIndicator color={ENV.mainColor} size={30} />
          ),
        }[getLoadingType()]
      }
    </View>
  </View>
);
