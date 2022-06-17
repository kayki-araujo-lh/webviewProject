import {SvgProps} from 'react-native-svg';

import {Credentials} from './http-auth';
import {TabsConfig} from './components';

import SplashLogo from './assets/images/logo.svg';
import UserIcon from './assets/icons/user.svg';
import CartIcon from './assets/icons/cart.svg';
import HomeIcon from './assets/icons/home.svg';

type Env = {
  url: string;
  credentials: Credentials;
  splashLogo: React.FC<SvgProps>;
  showTabs: boolean;
  tabsConfig: TabsConfig;
};

const ENV: Env = {
  url: 'https://dev.davo.com.br/',
  credentials: {
    user: '',
    pass: '',
  },
  splashLogo: SplashLogo,
  showTabs: false,
  tabsConfig: {
    initialRoute: 'Home',
    labelActiveColor: '#e30613',
    labelInactiveColor: '#f18288',
    routes: [
      {
        name: 'Login',
        url: 'https://dev.davo.com.br/login',
        icon: UserIcon,
      },
      {
        name: 'Home',
        url: 'https://dev.davo.com.br/',
        icon: HomeIcon,
      },
      {
        name: 'Carrinho',
        url: 'https://dev.davo.com.br/checkout-shipping',
        icon: CartIcon,
      },
    ],
  },
};

export default ENV;
