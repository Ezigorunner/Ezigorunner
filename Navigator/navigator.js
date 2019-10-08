

import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems , createSwitchNavigator} from "react-navigation";



// const MainScreenNavigator = createStackNavigator({
   
   
//     Home: { screen:  },
  
    
  
//   });


const SwithNavigator = createSwitchNavigator({
    Auth: {
        screen: "LoginStack"
    },

    App: {
        screen: "AppStack"
    },

    // Loader: {
    //     screen: LoaderStack
    // },


})