import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CadastroStack from './cadastroStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
   
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
},
  {
    drawerType: "back",
    hideStatusBar: true,
    statusBarAnimation: "fade"
  }
);

export default createAppContainer(RootDrawerNavigator);