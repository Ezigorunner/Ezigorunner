import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform } from 'react-native'
import { Container, Header, Content, Footer, FooterTab,  Icon, Button,} from 'native-base';
import {  Avatar} from 'react-native-elements'

export default class MyProfile extends Component {
    constructor(props)  {
        super(props)
        this.state ={
            showModal: false,

        }
    }

    static navigationOptions  = (props) =>  ({
        title: 'Profile',
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
 
                
                <View>

                        <View style={{flex:1, alignContent:"center", alignItems: "center", marginTop: "15%"}}>

                                <TouchableOpacity onPress = {() => {}} >
                                    <Avatar
                                                rounded
                                                size="xlarge"
                                                source={{
                                                    uri:
                                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                                }}
                                                showEditButton
                                                editButton={{style:{backgroundColor:"#f56200"}}}
                                                />
                                </TouchableOpacity>



                                    <View style={{flexDirection: "row", width:"80%",alignContent:"space-between", justifyContent:"space-between", borderBottomColor:"lightgray", borderBottomWidth: 1, marginTop:"20%"}}>
                                                <Text style={{color:"gray", fontSize:20}}>Name</Text>
                                                <Text style={{fontSize:20}}> John Doe</Text>
                                    </View>

                                    <View style={{flexDirection: "row", width:"80%",alignContent:"space-between", justifyContent:"space-between", borderBottomColor:"lightgray", borderBottomWidth: 1, marginTop:"5%"}}>
                                                <Text style={{color:"gray", fontSize:20}}>Email</Text>
                                                <Text style={{fontSize:20}}> Example@gmail.com</Text>
                                    </View>

                                    <View style={{flexDirection: "row", width:"80%",alignContent:"space-between", justifyContent:"space-between", borderBottomColor:"lightgray", borderBottomWidth: 1, marginTop:"5%"}}>
                                                <Text style={{color:"gray", fontSize:20}}>Name</Text>
                                                <Text style={{fontSize:20}}> John Doe</Text>
                                    </View>



                        </View>




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

                            <Button onPress={() => this.props.navigation.navigate("Setting")} vertical>
                            <Icon style={{color:"#f56200"}} name="cog" type="FontAwesome"/>
                            <Text>Setting</Text>
                            </Button>

                        </FooterTab>
                 </Footer>


                 </View>

        )
    }
}
