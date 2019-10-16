

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
import FAQ from '../Components/Screens/FAQ/index'
import TermAndService from '../Components/Screens/TermAndServices/index'
import Help from '../Components/Screens/Help/index' 
import CaptainProfile from '../Components/Screens/CaptainProfile/index'
import Type from '../Components/Screens/Registration/type'
import MapComponent from '../Components/Screens/Map/map'
import VehicleRegistration from '../Components/Screens/VehicleRegistrantion/index'
import IdentityCard from '../Components/Screens/IdentityCard/index'
import DrawerMenu from '../Drawers/riderDrawer'
import Wallet from '../Components/Screens/Wallet/index'


const AuthStack = createStackNavigator({
   
   
    Login: { 
        screen: Login
    },
  
    Type: {
        screen: Type
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

    FAQ: {
        screen: FAQ
    },

    TermAndService: {
        screen: TermAndService
    },

    Help: {
        screen: Help
    },

    CaptainProfile: {
        screen: CaptainProfile
    },

    Map: {
        screen: MapComponent
    },

    
    IdentityCard: {
        screen: IdentityCard
    },

    Wallet: {
        screen: Wallet
    },

  
  
  });

  const AppStackDrawer = createDrawerNavigator({

    Setting: {
        screen: AppStack,
        navigationOptions: () => ({
            title:"Setting",
            headerTitleStyle: {
                fontSize:30
            },
            headerMode: 'none',
            headerVisible: false,
            header:null,

    }),
    },

    MyProfile: {
        screen: MyProfile,
        navigationOptions: () => ({
            title:"My Profile",
            headerTitleStyle: {
                fontSize:30
            },
            header:null
    }),

    },

    CaptainProfile: {
        screen: CaptainProfile
    },

    FAQ: {
        screen: FAQ
    },

    Help: {
        screen: Help
    },

    TermAndService: {
        screen: TermAndService
    },

    VehicleRegistration: {
        screen: createStackNavigator({VehicleRegistration})
    },


  },
  
  {
    // initialRouteName: 'Main',
    contentComponent: DrawerMenu,
    drawerBackgroundColor: '#f5f5dc',
    contentOptions: {
        activeBackgroundColor: 'lightgray',
        activeTintColor: 'black',
        style: {
            borderRightColor: 'orange'
        },
        inactiveTintColor: 'black'
    },
    // resetOnBlur:true,
    drawerType:"slide",
    overlayColor:"transparent",
    // minSwipeDistance: 0,
    drawerPosition: 'left',
    drawerLockMode: "unlocked"
    
}
  
  )

  



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
