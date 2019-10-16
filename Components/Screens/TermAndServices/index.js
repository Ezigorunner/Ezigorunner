import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform, ScrollView } from 'react-native'
import { Container, Header, Content, Footer, FooterTab,  Icon, Button,Item, Input} from 'native-base';
import {  Avatar} from 'react-native-elements'

export default class TermAndService extends Component {
    constructor(props)  {
        super(props)
        this.state ={
            showModal: false,

        }
    }

    static navigationOptions  = (props) =>  ({
        title: 'Term and Service',
        drawerTitle:"",
        headerLeft: (
            <Icon
            onPress={() => {props.navigation.toggleDrawer()}}
              style={{paddingLeft: 10, color:"#fff"}}
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            />
          ),
        headerStyle: {
            backgroundColor: "#f56200",
         },
         headerTintColor: 'white',
         headerTitleStyle: {
            color: '#fff',
          },
    })


    render() {
        return (
            <View style={{flex: 1}}>


                <ScrollView contentContainerStyle={{paddingBottom:"15%"}} >

                    <View style={{flex: 1,padding:"3%"}}>


                    <View style={{flex: 2, flexDirection: "row",marginLeft:"2%", width:"90%",}}>
                 
                 <Text>1  </Text> 
                <Text style={{flex:1, fontSize:18, marginLeft:"3%", marginTop:5}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    </View>


                    <View style={{ flexDirection: "row",marginLeft:"2%", width:"90%", marginTop:5}}>
                 
                 <Text>2  </Text> 
                <Text style={{fontSize:18, marginLeft:"3%"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    </View>



                    <View style={{flexDirection: "row",marginLeft:"2%", width:"90%", marginTop:5}}>
                 
                 <Text>3  </Text> 
                <Text style={{fontSize:18, marginLeft:"3%"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    </View>



                    <View style={{flexDirection: "row",marginLeft:"2%", width:"90%", marginTop:5}}>
                 
                 <Text>4  </Text> 
                <Text style={{fontSize:18, marginLeft:"3%"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    </View>

                    
               
                    </View>



                </ScrollView>
 
                
               
               


                <Footer style={{position:"absolute", bottom:0}}>
                        <FooterTab style={{backgroundColor:"#fff"}}>
                            <Button vertical>
                            <Icon style={{color:"gray"}} name="history" type="FontAwesome"/>
                            <Text>History</Text>
                            </Button>
                            <Button  onPress={() => {this.props.navigation.navigate("Wallet")}} vertical>
                            <Icon  style={{color:"gray"}} name="google-wallet" type="FontAwesome"/>
                            <Text>Wallet</Text>
                            </Button>
                            <Button onPress={() => {this.props.navigation.navigate("CaptainProfile")}} style={{backgroundColor:"#f56200", borderRadius:100, width:"50%"}} vertical>
                            <Icon style={{color:"#fff"}} name="home" type="FontAwesome"/>
                            </Button>
                            <Button onPress={() => {this.props.navigation.navigate('Help')}} >
                            <Icon style={{color:"gray"}} name="question" type="FontAwesome"/>
                            <Text>help</Text>
                            </Button>
                            <Button  onPress={() => {this.props.navigation.navigate('Setting')}} vertical>
                            <Icon style={{color:"#f56200"}} name="cog" type="FontAwesome"/>
                            <Text>Setting</Text>
                            </Button>
                        </FooterTab>
                 </Footer>

                 </View>

        )
    }
}
