import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  return await messaging().requestPermission();
}
