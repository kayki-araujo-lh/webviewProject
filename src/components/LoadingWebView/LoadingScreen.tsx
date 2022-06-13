import {View, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import LogoSvg from '../../assets/images/logo.svg';
export type LoadingScreenProps = {};

export const LoadingScreen: FC<LoadingScreenProps> = () => (
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
      {/* Seria uma boa ideia dexar os valores abaico responsivo */}
      <LogoSvg width={250} height={250} />
    </View>
  </View>
);
