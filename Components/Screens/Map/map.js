import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform, ScrollView } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon, Button, Item, Left, Body, Right, CheckBox, List, ListItem } from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import ToggleSwitch from 'toggle-switch-react-native'
import MapView from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import { Marker } from 'react-native-maps';

export default class MapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude:false,
            longitude: false
           
        }
    }


                   requestCameraPermission =  async  () =>  {
                    try {
                        const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Cool Photo App Camera Permission',
                            message:
                            'Cool Photo App needs access to your camera ' +
                            'so you can take awesome pictures.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        },
                        );
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                         Geolocation.getCurrentPosition(info => {
                             
                        console.log("info info",info)
                        this.setState({
                            latitude: info.coords.latitude,
                            longitude: info.coords.longitude,
                        })
                        });
                         
                        console.log('You can use the camera');
                        } else {
                        console.log('Camera permission denied');
                        }
                    } catch (err) {
                        console.warn(err);
                    }




                    }

    componentWillMount() {
        this.requestCameraPermission()
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
                                <Button onPress={() => {this.props.navigation.goBack()}} transparent>
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


                <View>

              {this.state.latitude &&  <MapView

                style={{height:"100%", width:"100%"}}
                    initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude ,
                    latitudeDelta: 0.0033,
                    longitudeDelta: 0.0033,
                    }}
                >

                        <Marker
                            coordinate={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude ,
                            }}
                            title={"HNH tech "}
                            />
                
                
                </MapView>
                }
                
                </View>





            </View>

        )
    }
}
