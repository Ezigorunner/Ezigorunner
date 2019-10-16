import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform } from 'react-native'
import { Container, Header, Content, Footer, FooterTab,  Icon, Button,Item, Input} from 'native-base';
import {  Avatar} from 'react-native-elements'

export default class ChangePassword extends Component {
    constructor(props)  {
        super(props)
        this.state ={
            showModal: false,

        }
    }

    static navigationOptions  = (props) =>  ({
        title: 'Change Password',
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
 
                
                <View style={{alignItems:"center", marginTop:"20%"}}>

                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%' }} >
                        <Input placeholder="Old Password" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="New Password" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="Confirm Password" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>

                    <View style={{marginTop:"30%", width: "100%", alignItems:"center"}}>

                     <Button onPress={() => this.props.navigation.navigate('App')} style={{ width: '70%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }} >Sign in</Text>
                    </Button>

                    </View>
                  
                </View>
               


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
