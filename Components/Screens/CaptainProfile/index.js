import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert, Platform, ScrollView } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon, Button, Item, Left, Body, Right, CheckBox, List, ListItem } from 'native-base';
import { Avatar } from 'react-native-elements'
import ToggleSwitch from 'toggle-switch-react-native'

export default class CaptainProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            privateBtn: false,
            service: [
                {name:"Blow out", amount:60, checked: false},
                {name:"Blow out w/ style", amount:70,checked: false},
                {name:"Braidede Style", amount:75, checked: false},
                {name:"Updo", amount:80,checked: false},
                {name:"Makeup & lashes", amount:90, checked: false},
                {name:"Makeup ( No lashes )", amount:70,checked: false},
                {name:"Airbrush Makeup & lash", amount:120, checked: false},
                {name:"Airbrush Makeup ( No lashes )", amount:105,checked: false},
                {name:"Add clip ins", amount:30,checked: false},

             ],
        }
    }

    static navigationOptions = (props) => ({
        title: 'FAQ',
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
                    {/* <Left>
                                <Button transparent>
                                <Icon name='arrow-back' />
                                </Button>
                            </Left> */}
                    <Body>
                        <Text style={{ color: "#fff", fontSize: 25, marginLeft: "7%" }}>Ezigo Partner</Text>
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





            <ScrollView contentContainerStyle={{paddingBottom:"30%"}}>

                <View style={{flex:1}}>

                <View style={{ flexDirection: "row", borderWidth:2, borderColor:"gray", width:"100%", height: "15%", alignItems:"center"}}>

                    <View style={{ width: "39%", height: "95%", borderWidth:2, borderColor:"gray"}}>

                        <Image 
                            source={{
                                    uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }} 
                           style={{ width: "100%", height: "100%" }}                     
                                                
                        />

                    </View>

                    <View style={{ width: "60%", height: "100%", flexDirection: "column", alignItems:"center" }}>

                        <View style={{ width: "80%", height: "20%", flexDirection: "column", marginTop:"10%" }}>

                            <Text style={{fontSize:25, fontWeight:"bold"}}>
                                Zainal Abideen
                            </Text>

                        </View>


                        <View style={{ width: "80%", height: "20%", flexDirection: "column", marginTop: 5 }}>

                        <Text style={{padding:"4%"}}>
                               Toyota Preius 2017 white Ezigo Car 4 Seater ST777U
                         </Text>

                        </View>



                    </View>

                </View>



                <View style={{ flexDirection: "row", borderWidth:2, borderColor:"gray", width:"100%", height: "15%", alignItems:"center", justifyContent:"space-around"}}>
                        
                        <View style={{ flexDirection: "column", borderWidth:2, borderColor:"gray", width:"30%", height: "95%", alignItems:"center"}}>

                            <View>
                                <Image source={require('../../../drawable/yellow.png')} style={{height:100, width: 100}} />
                            </View>
                            <View>
                                <Text>
                                    5.00%
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    Rating
                                </Text>
                            </View>

                        </View >

                        <View style={{ flexDirection: "column", borderWidth:2, borderColor:"gray", width:"33%", height: "95%", alignItems:"center"}}>

                        <View>

                                <Image source={require('../../../drawable/green.png')} style={{height:100, width: 100}} />
                            </View>
                            <View>
                                <Text>
                                    5.00%
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    Acceptibilty
                                </Text>
                            </View>


                            
                        </View>


                        <View style={{ flexDirection: "column", borderWidth:2, borderColor:"gray", width:"33%", height: "95%", alignItems:"center"}}>

                        <View>
                                <Image source={require('../../../drawable/red.png')} style={{height:100, width: 100}} />
                            </View>
                            <View>
                                <Text>
                                    5.00%
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    Cancelation
                                </Text>
                            </View>


                        
                        </View>




                </View>



                <View style={{ borderWidth:2, borderColor:"gray", width:"100%"}}>

                {this.state.service.map((value, index) => {
                    return(
                    <List key={index}>
                      <ListItem  onPress={() => {this.workFunction("normal_onVisit",index, value.checked, value, value.amount)}} avatar>
                        <Left>
                          <Text></Text>
                          <Text></Text>
                        </Left>
                        <Body>
                          <Text></Text>
                          <Text note></Text>
                          <Text note>{value.name}</Text>
                        </Body>
                        <Right style={{display:"flex", flexDirection:"row", borderBottomColor: ""}}>
                        <Text note>Rs: {value.amount}</Text>
                          <CheckBox checked={value.checked} color="#f56200"/>
                        </Right>
                      </ListItem>
                    </List>)
                  })}
                                

                </View>

                </View>

                <View style={{ borderWidth:2, borderColor:"gray", width:"100%", marginTop:"10%", alignItems:"center"}}>


                  <Text style={{fontSize: 25}}>
                      My Wallet
                  </Text>

                  <Text style={{fontSize: 35, fontWeight:"bold"}}>
                      RM 12.00
                  </Text>

                </View>

        </ScrollView>




                        <View style={{alignContent:"center", alignItems:"center", bottom: 0, position:"absolute", width: "100%"}}>

                    <Button onPress={() => {this.props.navigation.navigate('Map')}} style={{ width: '100%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }} >Get Started</Text>
                    </Button>



                    </View>

            </View>

        )
    }
}
