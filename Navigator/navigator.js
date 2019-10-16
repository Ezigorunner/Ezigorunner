

import {  createDrawerNavigator, createAppContainer, DrawerItems , createSwitchNavigator} from "react-navigation";
import Login from '../Components/Screens/Login/index'
import Registeration from '../Components/Screens/Registration/index'
import GetStarted from '../Components/Screens/Registration/getstarted'
import { createStackNavigator } from 'react-navigation-stack';
import VehicleRegistration from "../Components/Screens/VehicleRegistrantion";
import Camera from '../Components/Constants/Camera';
import IdentityCard from "../Components/Screens/IdentityCard";
import Wallet from "../Components/Screens/Wallet";
import AddCredit from "../Components/Screens/Wallet/AddCredit";


const AuthStack = createStackNavigator({
   
   
    Login: { 
        screen: Login
    },
  
    GetStarted: {
        screen : GetStarted
    },

    Registeration: {
        screen: Registeration
    },
    VehicleRegistration: VehicleRegistration,
    Camera: Camera,
    IdentityCard: IdentityCard,
    Wallet: Wallet,
    AddCredit: AddCredit
  
  });


const SwithNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },

    App: {
        screen: "AppStack"
    },

    // Loader: {
    //     screen: LoaderStack
    // },


})

const Navigator = createAppContainer(SwithNavigator);
export default Navigator;
