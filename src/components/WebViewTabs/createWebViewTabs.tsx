import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {HTTP_PASS, HTTP_USER} from '../../.env';
import {LoadingWebView} from '../LoadingWebView';

const Tab = createBottomTabNavigator();

export type createWebViewTabsConfig = Array<{
  name: string;
  url: string;
  icon: FC;
}>;

export type CreateWebViewTabs = (config: createWebViewTabsConfig) => FC;

export const createWebViewTabs: CreateWebViewTabs = config => () =>
  (
    <Tab.Navigator initialRouteName={config[0].name}>
      {config.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: screen.icon,
          }}>
          {() => (
            <LoadingWebView
              credentials={{
                user: HTTP_USER,
                pass: HTTP_PASS,
              }}
              url={screen.url}
            />
          )}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
