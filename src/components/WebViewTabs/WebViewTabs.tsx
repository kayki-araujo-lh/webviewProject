import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import ENV from '../../.env';
import {LoadingWebView} from '../LoadingWebView';

const Tab = createBottomTabNavigator();

type TabRoute = {
  name: string;
  url: string;
  icon: FC;
};

export type TabsConfig = {
  initialRoute: string;
  labelActiveColor: string;
  labelInactiveColor: string;
  routes: TabRoute[];
};

const tabsConfig = ENV.tabsConfig;
export const WebViewTabs: FC = () =>
  tabsConfig ? (
    <Tab.Navigator initialRouteName={tabsConfig.initialRoute}>
      {tabsConfig.routes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: route.icon,
            tabBarInactiveTintColor: tabsConfig.labelInactiveColor,
            tabBarActiveTintColor: tabsConfig.labelActiveColor,
          }}>
          {() => <LoadingWebView url={route.url} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  ) : (
    <></>
  );
