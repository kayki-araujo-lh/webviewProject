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
  mainColor: string;
  showTabs: boolean;
  tabsConfig: TabsConfig;
};

const ENV: Env = {
  url: '<url>',
  credentials: {
    user: '<user>',
    pass: '<pass>',
  },
  splashLogo: SplashLogo,
  mainColor: '#00502f',
  showTabs: false,
  tabsConfig: {
    initialRoute: 'Home',
    labelActiveColor: '#00502f',
    labelInactiveColor: '#80a898',
    routes: [
      {
        name: 'Login',
        url: '<url>login',
        icon: UserIcon,
      },
      {
        name: 'Home',
        url: '<url>',
        icon: HomeIcon,
      },
      {
        name: 'Carrinho',
        url: '<url>cart',
        icon: CartIcon,
      },
    ],
  },
};

export default ENV;
