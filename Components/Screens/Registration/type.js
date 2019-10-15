import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Item, Input, Button } from 'native-base'

export default class Type extends Component {
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
            {/* <View style={{ alignItems: 'center' }} >
                <Image source={require('../../../drawable/ezigoPartner.png')} style={{height:100, width: 180 }} />
            </View> */}


            <View style={{ flex:1,flexDirection:"row" , alignItems:"center", justifyContent:"space-around"}}>
           
                <View style={{height:"40%", width:"40%", backgroundColor:"#fff", borderRadius:10, borderColor:"#f56200", borderWidth:2}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Registeration')}} style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{ justifyContent:"center", color:"#f56200", fontSize:30}}>
                            Rider
                        </Text>
             </TouchableOpacity>
                
                </View>

                <View style={{height:"40%", width:"40%", backgroundColor:"#fff", borderRadius:10, borderColor:"#f56200", borderWidth:2}}> 
                <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{ justifyContent:"center", color:"#f56200", fontSize:30}}>
                            User
                        </Text>
             </TouchableOpacity>
                </View>
               
            </View>

        </View>
        )
    }
}
