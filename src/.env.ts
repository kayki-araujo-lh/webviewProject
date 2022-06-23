import {SvgProps} from 'react-native-svg';

import {Credentials} from './utils';
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
  url: 'https://www.webcontinental.com.br/',
  credentials: {
    user: '',
    pass: '',
  },
  splashLogo: SplashLogo,
  mainColor: '#0098ff',
  showTabs: true,
  tabsConfig: {
    initialRoute: 'Home',
    labelActiveColor: '#0098ff',
    labelInactiveColor: '#676666',
    routes: [
      {
        name: 'Login',
        url: 'https://www.webcontinental.com.br/login',
        icon: UserIcon,
      },
      {
        name: 'Home',
        url: 'https://www.webcontinental.com.br/',
        icon: HomeIcon,
      },
      {
        name: 'Carrinho',
        url: 'https://www.webcontinental.com.br/cart',
        icon: CartIcon,
      },
    ],
  },
};

export default ENV;
