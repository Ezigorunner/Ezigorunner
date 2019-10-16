import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform, ScrollView } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon, Button, Item, Left, Body, Right, CheckBox, List, ListItem } from 'native-base';
import { Avatar } from 'react-native-elements'
import ToggleSwitch from 'toggle-switch-react-native'

export default class MapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            privateBtn: false,
           
        }
    }

    static navigationOptions = (props) => ({
        title: 'Online',
        drawerTitle: "",
        header: null
        // headerLeft: (
        //     <Icon
        //     onPress={() => {props.navigation.toggleDrawer()}}
        //       style={{paddingLeft: 10, color:"#fff"}}
        //       type="ionicon"
        //       name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
        //     />
        //   ),
        // headerStyle: {
        //     backgroundColor: "#f56200",
        //  },
        //  headerTintColor: 'white',
        //  headerTitleStyle: {
        //     color: '#fff',
        //   },
    })


    workFunction = (index, checked, value,amount) => {
        const {service} = this.state
            console.log("index, checked, value,amount", checked, value, service[checked])

            service[checked].checked = !value

            this.setState({service})


    }


    render() {
        return (
            <View style={{ flex: 1 }}>


                <Header style={{ backgroundColor: "#f56200" }}>
                    <Left>
                                <Button transparent>
                                <Icon  name='arrow-back' />
                                </Button>
                            </Left>
                    <Body>
                        <Text style={{ color: "#fff", fontSize: 25, marginLeft: "7%" }}>Online</Text>
                    </Body>
                    <Right>
                        <ToggleSwitch
                            isOn={this.state.privateBtn}
                            onColor='green'
                            offColor='pink'
                            labelStyle={{ color: 'black', fontWeight: '900' }}
                            size='large'
                            onToggle={() => this.setState({ privateBtn: !this.state.privateBtn })}
                        />
                    </Right>
                </Header>





            </View>

        )
    }
}
