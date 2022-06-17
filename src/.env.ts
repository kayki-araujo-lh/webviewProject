import {SvgProps} from 'react-native-svg';

import {Credentials} from './http-auth';
import {TabsConfig} from './components';

import CartIcon from './assets/icons/cart.svg';
import HomeIcon from './assets/icons/home.svg';

import SplashLogo from './assets/images/logo.svg';
type Env = {
  url: string;
  credentials: Credentials;
  splashLogo: React.FC<SvgProps>;
  showTabs: boolean;
  tabsConfig?: TabsConfig;
};

const ENV: Env = {
  url: '<url>',
  credentials: {
    user: '<user>',
    pass: '<pass>',
  },
  splashLogo: SplashLogo,
  showTabs: true,
  tabsConfig: {
    initialRoute: 'Home',
    labelActiveColor: '#004a8f',
    labelInactiveColor: '#bfd1e3',
    routes: [
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
