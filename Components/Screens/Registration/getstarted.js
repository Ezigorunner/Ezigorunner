import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Button } from 'native-base'

export default class GetStarted extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Image source={require('../../../drawable/header.png')} resizeMode="cover" style={{ width: '100%', height: '45%' }} />
                
               <Button onPress={() => { this.props.navigation.navigate('Verify')}} >

                   <Text>Next</Text>
               </Button>
            </View>
        )
    }
}
