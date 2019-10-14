

import { createAppContainer, DrawerItems , createSwitchNavigator} from "react-navigation";
import Login from '../Components/Screens/Login/index'
import Registeration from '../Components/Screens/Registration/index'
import GetStarted from '../Components/Screens/Registration/getstarted'
import Verify from '../Components/Screens/Registration/verify'
import Setting from '../Components/Screens/Settings/index'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import MyProfile from '../Components/Screens/MyProfile/index'
import ChangePassword from '../Components/Screens/ChangePassword/index'


const AuthStack = createStackNavigator({
   
   
    Login: { 
        screen: Login
    },
  
    
    Registeration: {
        screen: Registeration
    },

    GetStarted: {
        screen : GetStarted
    },

    Verify: {
        screen : Verify
    },

  
  });

  const AppStack = createStackNavigator({
   
    Setting: { 
        screen: Setting
    },

    MyProfile: {
        screen: MyProfile
    },

    ChangePassword: {
        screen: ChangePassword
    },

  
  
  });

  const AppStackDrawer = createDrawerNavigator({

    Setting: {
        screen: AppStack
    },
    MyProfile: {
        screen: MyProfile
    },



  })

  



const SwithNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },

    App: {
        screen: AppStackDrawer
    },

    

})

const Navigator = createAppContainer(SwithNavigator);
export default Navigator;
