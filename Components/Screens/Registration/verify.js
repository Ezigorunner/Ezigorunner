import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, Modal, Alert } from 'react-native'
import { Item, Input, Button } from 'native-base'
import CodeInput from 'react-native-confirmation-code-input';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class Verify extends Component {
    constructor(props)  {
        super(props)
        this.state ={
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Verify Phone Number',
        headerStyle: {
            backgroundColor: "#f56200",
         },
         headerTintColor: 'white',
         headerTitleStyle: {
            color: '#fff',
          },
    }


    render() {
        return (
            <View style={{ flex: 1 }} >
                <ImageBackground source={require('../../../drawable/header.png')} style={{ width: "100%", height: 270 }}>

                <View>
                    <View style={{marginTop:"10%"}}>
                    <Text style={{fontFamily:"MrEavesXLModNarOT-Reg", fontSize:20, marginTop:"4%", opacity:0.6, textAlign:"center", color: "#fff"}}>Enter Your Payments PIN</Text>
                    <CodeInput
                    // ref="codeInputRef2"
                    // secureTextEntry
                    codeLength={4}
                    // compareWithCode='1234'
                    activeColor='#fff'
                    inactiveColor='#fff'
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    size={30}
                    onFulfill={(isValid) => {this.setState({code:isValid})}}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{color:"#fff"}}
                    />

                    <View style={{alignContent:"center", alignItems:"center", marginTop:"4%"}}>

                        <Button rounded onPress={() => {this.setState({showModal: true})}} style={{ width: '75%', marginTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ff6600' }} >Resend</Text>
                    </Button>

                    </View>

                </View>
                </View>

                </ImageBackground>

                <View>

                 <Dialog
                        visible={this.state.showModal}
                        onTouchOutside={() => {
                        this.setState({ showModal: false });
                        }}
                        onDismiss={() => {this.setState({ showModal: false })}}
                        dialogStyle={{width:"90%"}}
                        onHardwareBackPress={() => {
                            this.setState({ showModal: false });
                            }}
                    >
                        <DialogContent>
                            <View>

                                <View style={{alignItems:"center", alignSelf:"center", marginTop:"5%"}}>

                                  <Text style={{ color: '#ff6600', fontSize:25, marginTop:"5%" }}>Is this your number?</Text>
                                  <Text style={{ color: '#000', fontSize:25, marginTop:"3%"}}>0900 78601</Text>
                                  <Text style={{ color: '#000', textAlign:"center", marginTop:"3%"}}>We will call you to give you the verification code.</Text>

                                  <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%"}}>

                                    <Button rounded onPress={() => {this.setState({showModal: true})}} style={{ width: '40%', marginTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderColor:"#ff6600" }}>
                                     <Text style={{ color: '#ff6600' }} >Cancel</Text>
                                    </Button>

                                    <Button rounded onPress={() => {this.setState({showModal: true})}} style={{ width: '40%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                                     <Text style={{ color: '#fff' }} >Reciece a Call</Text>
                                    </Button>

                                  </View>

                                </View>

                            </View>
                        </DialogContent>
                    </Dialog>
                </View>

               
                <View style={{alignContent:"center", alignItems:"center", bottom: 0, position:"absolute", width: "100%"}}>

                    <Button onPress={() => {this.props.navigation.navigate('GetStarted')}} style={{ width: '100%', marginTop: 10, backgroundColor: '#ff6600', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff' }} >Next</Text>
                    </Button>


                       
                    </View>
            </View>
        )
    }
}
