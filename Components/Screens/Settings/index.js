import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform } from 'react-native'
import { Container, Header, Content, Footer, FooterTab,  Icon, Button,} from 'native-base';

export default class Setting extends Component {
    constructor(props)  {
        super(props)
        this.state ={
            showModal: false,

        }
    }

    static navigationOptions  = (props) =>  ({
        title: 'Setting',
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

                <View style={{ marginTop:"3%"}}>

                <Button onPress={() => this.props.navigation.navigate("MyProfile")} style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"lightgreen", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >My Profile</Text>
                    </View>
                </Button>

                <Button onPress={() => this.props.navigation.navigate("ChangePassword")} style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"orange", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >Change Password</Text>
                    </View>
                </Button>


                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"pink", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >Identity Card/Passport</Text>
                    </View>
                </Button>

                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"black", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >Term of services</Text>
                    </View>
                </Button>

                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"purple", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >Privacy and policy</Text>
                    </View>
                </Button>

                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"red", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >About</Text>
                    </View>
                </Button>

                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"lightpink", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >FAQ</Text>
                    </View>
                </Button>

                <Button style={{borderBottomWidth:1, borderBottomColor:"gray", flexDirection:"row", padding:"5%"}} transparent>
                <View style={{flexDirection:"row"}}>
                            <View style={{backgroundColor:"lightgreen", height:10, width: 10, marginLeft:"10%"}} />
                            <Text style={{marginLeft:"10%"}} >Sign Out</Text>
                    </View>
                </Button>

                </View>
               


                <Footer style={{position:"absolute", bottom:0}}>
                        <FooterTab style={{backgroundColor:"#fff"}}>
                            <Button vertical>
                            <Icon style={{color:"gray"}} name="history" type="FontAwesome"/>
                            <Text>History</Text>
                            </Button>
                            <Button vertical>
                            <Icon style={{color:"gray"}} name="google-wallet" type="FontAwesome"/>
                            <Text>Wallet</Text>
                            </Button>
                            <Button style={{backgroundColor:"#f56200", borderRadius:100, width:"50%"}} vertical>
                            <Icon style={{color:"#fff"}} name="home" type="FontAwesome"/>
                            </Button>
                            <Button >
                            <Icon style={{color:"gray"}} name="question" type="FontAwesome"/>
                            <Text>help</Text>
                            </Button>
                            <Button vertical>
                            <Icon style={{color:"#f56200"}} name="cog" type="FontAwesome"/>
                            <Text>Setting</Text>
                            </Button>
                        </FooterTab>
                 </Footer>


                 </View>

        )
    }
}
