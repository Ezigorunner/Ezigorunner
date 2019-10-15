import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Footer, Button, Icon, FooterTab } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class VehicleRegistration extends Component {

constructor(props) {
    super(props)

    this.state = {
         motorcycle: true,
         car: false
    }
}

    static navigationOptions = {
        title: 'VEHICLE REGISTRTION',
        headerStyle: {
            backgroundColor: "#f56200"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: '#fff',
        },
        // headerRight: <Icon name="more" color="#fff" style={{ color: '#fff', marginLeft: -20 }} />
    }


    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '100%', borderBottomColor: 'gray', borderBottomWidth: 2 }}>
                    <View style={{ width: '48%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }} >TYPE VEHICLES</Text>
                        <View style={{ marginTop: 20 }} >
                            <Text style={{ color: 'gray', fontWeight: 'bold' }} >Reg. number: ST 3365 U</Text>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }} >Brand: Yamaha</Text>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }} >Model: LC125</Text>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }} >year: 2015</Text>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }} >colour: red</Text>
                        </View>
                    </View>
                    <View style={{ width: '48%' }}>
                        <View style={{ flexDirection: 'row', width: '100%' }} >
                            <Text onPress={() => this.setState({ motorcycle: true, car: false })} style={this.state.motorcycle ? { borderColor: '#000', borderWidth: 1, padding: 10, backgroundColor: 'orange', width: '70%' } : { borderColor: '#000', borderWidth: 1, padding: 10, width: '70%' }} >Motorcycle</Text>
                            <Text onPress={() => this.setState({ motorcycle: false, car: true })} style={this.state.car ? { borderColor: '#000', borderWidth: 1, padding: 10, backgroundColor: 'orange', width: '30%' } :  { borderColor: '#000', borderWidth: 1, padding: 10, width: '30%' }} >Car</Text>
                        </View>
                        <View>
                            <Image source={{ uri: "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png" }} style={{ width: "100%", height: 100, marginTop: 10 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity  style={{ flexDirection: 'row' }}>
                                <Icon name="camera" style={{ color: 'orange' }} />
                                <Text style={{ padding: 5 }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{ flexDirection: 'row' }}>
                                <Icon name="aperture" style={{ color: 'orange' }} />
                                <Text style={{ padding: 5 }}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: 'gray' }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>VEHICLES PERMIT</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "90%" }} >
                        <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }} >
                            <Icon name="camera" style={{ fontSize: 50 }} />
                            <Text>front</Text>
                        </View>
                        <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }}>
                            <Icon name="camera" style={{ fontSize: 50 }}/>
                            <Text>back</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>VEHICLES PERMIT</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "90%" }} >
                        <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }} >
                            <Icon name="camera" style={{ fontSize: 50 }} />
                            <Text>front</Text>
                        </View>
                        <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }}>
                            <Icon name="camera" style={{ fontSize: 50 }}/>
                            <Text>back</Text>
                        </View>
                    </View>
                </View>

                <Footer style={{ position: "absolute", bottom: 0 }}>
                    <FooterTab style={{ backgroundColor: "#fff" }}>
                        <Button vertical>
                            <Icon style={{ color: "gray" }} name="history" type="FontAwesome" />
                            <Text>History</Text>
                        </Button>
                        <Button vertical>
                            <Icon style={{ color: "gray" }} name="google-wallet" type="FontAwesome" />
                            <Text>Wallet</Text>
                        </Button>
                        <Button style={{ backgroundColor: "#f56200", borderRadius: 100, width: "50%" }} vertical>
                            <Icon style={{ color: "#fff" }} name="home" type="FontAwesome" />
                        </Button>
                        <Button >
                            <Icon style={{ color: "gray" }} name="question" type="FontAwesome" />
                            <Text>help</Text>
                        </Button>
                        <Button vertical>
                            <Icon style={{ color: "#f56200" }} name="cog" type="FontAwesome" />
                            <Text>Setting</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}


