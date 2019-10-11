import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Item, Input, Button } from 'native-base'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }


    static navigationOptions = {
        header: null
    }


    render() {
        return (
            
            <View style={{ flex: 1 }} >
                <Image source={require('../../../drawable/bg.png')} resizeMode="cover" style={{ width: '100%', height: '45%' }} />
                <View style={{ alignItems: 'center' }} >
                    {/* <Text style={{ fontSize: 35, color: '#ff6600' }}>ezigo</Text> */}
                    {/* <Text style={{ fontSize: 35 }}>runner</Text> */}
                    <Image source={require('../../../drawable/ezigoPartner.png')} style={{height:100, width: 180 }} />
                </View>
                <View style={{ alignItems: 'center' }} >
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%' }} >
                        <Input placeholder="Username" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="Password" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Button  style={{ width: '70%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }} >Sign in</Text>
                    </Button>
                </View>
                <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 20 }}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold' }}>Forgotten Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("Registeration")}} >
                        <Text style={{ fontWeight: 'bold' }}>New here? Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
