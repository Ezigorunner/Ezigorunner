import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Footer, Button, Icon, FooterTab, Spinner, List, Left, ListItem, Body } from 'native-base'

export default class AddCredit extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    static navigationOptions = {
        title: 'Add Credit',
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
                    <View style={{ flex: 1, padding: 10 }} >
                        <Button transparent style={{ borderWidth: 1, borderColor: '#000', justifyContent: 'flex-start' }} iconLeft >
                            <Icon name="card" style={{ color: '#000' }} />
                            <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Credit / Debit Card</Text>
                        </Button>
                        <Button transparent style={{ borderWidth: 1, borderColor: '#000', marginTop: 10, justifyContent: 'flex-start' }} >
                            <Icon name="wallet" style={{ color: '#000' }} />
                            <Text style={{ fontWeight: 'bold', marginLeft: 10 }} >Online Banking</Text>
                        </Button>
                        <Button transparent style={{ borderWidth: 1, borderColor: '#000', marginTop: 10, justifyContent: 'flex-start' }} iconLeft >
                            <Icon name="repeat" style={{ color: '#000' }} />
                            <Text style={{ fontWeight: 'bold', marginLeft: 10 }} >ATM / Bank Transfer</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


