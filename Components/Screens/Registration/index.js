import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Button } from 'native-base'

export default class Registeration extends Component {
    constructor(props) {
        super(props)
    }


    static navigationOptions = {
        title: 'Registration',
        headerStyle: {
            backgroundColor: "#f56200"
         },
         headerTintColor: 'white',
         headerTitleStyle: {
            color: '#fff',
          },
    }

    

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ alignItems: 'center', marginTop: "5%" }} >
                    {/* <Text style={{ fontSize: 35, color: '#ff6600' }}>ezigo</Text> */}
                    {/* <Text style={{ fontSize: 35 }}>runner</Text> */}
                    <Image source={require('../../../drawable/ezigoPartner.png')} style={{height:100, width: 180 }} />
                </View>
               <View style={{ alignItems: 'center', marginTop: "5%" }} >
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%' }} >
                        <Input placeholder="First Name" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="Last Name" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="Phone Number" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>
                    <Item  style={{ borderColor: '#ff6600', borderWidth: 5, borderStyle: 'solid', width: '70%', marginTop: 10 }} >
                        <Input placeholder="Email" placeholderTextColor="#ff6600" style={{ textAlign: 'center' }} />
                    </Item>

                    <Button onPress={() => {this.props.navigation.navigate('GetStarted')}} style={{ width: '90%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }} >Submit</Text>
                    </Button>
            
               <View style={{ width: '90%', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ff6600' }} >Register With</Text>
                </View>
        
                <Button  style={{ width: '90%', marginTop: 10, backgroundColor: '#3b5998', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff' }} >Facebook</Text>
                    </Button>
                    
                </View>
               
            </View>
        )
    }
}
