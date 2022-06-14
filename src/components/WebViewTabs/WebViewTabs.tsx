import React from 'react';
import {HTTP_URL} from '../../.env';
import {createWebViewTabs, createWebViewTabsConfig} from './createWebViewTabs';

import HomeIcon from '../../assets/icons/home.svg';
import UserIcon from '../../assets/icons/user.svg';
import CartIcon from '../../assets/icons/cart.svg';

const tabs: createWebViewTabsConfig = [
  {
    name: 'Home',
    url: `${HTTP_URL}`,
    icon: HomeIcon,
  },
  {
    name: 'Login',
    url: `${HTTP_URL}/login`,
    icon: UserIcon,
  },
  {
    name: 'Carrinho',
    url: `${HTTP_URL}/cart`,
    icon: CartIcon,
  },
];

export const WebViewTabs = createWebViewTabs(tabs);
