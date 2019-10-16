import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Footer, Button, Icon, FooterTab, Spinner, List, Left, ListItem, Body } from 'native-base'

export default class Wallet extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    static navigationOptions = {
        title: 'Wallet',
        headerStyle: {
            backgroundColor: "#f56200"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: '#fff',
        },
        // headerRight: <Icon name="search" color="#fff" style={{ color: '#fff', marginLeft: -40 }} />
    }


    render() {
        const {

        } = this.state
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }} >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'lightgray' }}>Your Current Balance is</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }} >RM 12.00</Text>
                        </View>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', marginVertical: 20 }}>
                            <Button style={{ width: '80%', justifyContent: 'center', backgroundColor: '#f56200', borderWidth: 1, borderColor: '#000' }} ><Text style={{ color: '#fff', fontWeight: 'bold' }}>Add Credit</Text></Button>
                            <Button style={{ width: '80%', justifyContent: 'center', backgroundColor: 'pink', borderWidth: 1, borderColor: '#000', marginTop: 10 }} ><Text style={{ color: '#fff', fontWeight: 'bold' }} >Money Transfer</Text></Button>
                        </View>
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <Text style={{ width: '90%', fontWeight: 'bold' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                    </View>
                </ScrollView>
               
                <Footer style={{position:"absolute", bottom:0}}>
                        <FooterTab style={{backgroundColor:"#fff"}}>
                            <Button vertical>
                            <Icon style={{color:"gray"}} name="history" type="FontAwesome"/>
                            <Text>History</Text>
                            </Button>
                            <Button  onPress={() => {this.props.navigation.navigate("Wallet")}} vertical>
                            <Icon  style={{color:"#f56200"}} name="google-wallet" type="FontAwesome"/>
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
                            <Icon style={{color:"gray"}} name="cog" type="FontAwesome"/>
                            <Text>Setting</Text>
                            </Button>
                        </FooterTab>
                 </Footer>
            </View>
        )
    }
}