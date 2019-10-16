import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, PermissionsAndroid, StyleSheet } from 'react-native'
import { Item, Input, Button, Icon } from 'native-base'
import PhoneInput from 'react-native-phone-input'
import Geolocation from '@react-native-community/geolocation';

export default class GetStarted extends Component {
    constructor() {
        super();

        this.updateInfo = this.updateInfo.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.state = {
            pickerData: null,
            countryCode: '',
            number: '',
            cca2: 'US',
            valid: "",
            type: "",
            value: ""
        };
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
        headerRight: <Icon name="more" color="#fff" style={{ color: '#fff', marginLeft: -20 }} />
    }

    // onPressFlag() {
    //     this.countryPicker.openModal();
    // }

    // selectCountry(country) {
    //     this.phone.selectCountry(country.cca2.toLowerCase());
    //     this.setState({ cca2: country.cca2 });
    // }

    // componentDidMount() {
    //     // console.log(this.phone)
    //     this.setState({
    //       pickerData: this.phone.getPickerData(),
    //     });
    //   }


     componentDidMount = async () =>{
        this.requestCameraPermission()
        // console.log(Geolocation.getCurrentPosition(info => console.log(info)))
        const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)

        if (granted) {
            console.log("You can use the ACCESS_FINE_LOCATION")
        }
        else {
            console.log("ACCESS_FINE_LOCATION permission denied")
        }

        Geolocation.getCurrentPosition(info => {
            fetch(`http://api.geonames.org/countryCodeJSON?lat=${info.coords.latitude}&lng=${info.coords.longitude}&username=haris`)
                .then(res => res.json())
                .then(result => {
                    console.log(result)

                    this.setState({ countryCode: result.countryCode })
                    console.log(this.phone.getCountryCode())
                    this.setState({
                        pickerData: this.phone.getPickerData(),
                        number: this.phone.getCountryCode()
                    });
                    this.phone.selectCountry(result.countryCode.toLowerCase())
                })
                .catch(err => console.log(err))
        }, err => console.log("err", err), {
            enableHighAccuracy: false,
            timeout: 3000
        })

    }


    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Location Permission',
                    'message': 'This App needs access to your location ' +
                        'so we can know where you are.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use locations ")
            } else {
                console.log("Location permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    updateInfo() {
        this.setState({
            valid: this.phone.isValidNumber(),
            type: this.phone.getNumberType(),
            value: this.phone.getValue()
        });
    }

    renderInfo() {
        if (this.state.value) {
            return (
                <View style={styles.info}>
                    <Text>
                        Is Valid:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {this.state.valid.toString()}
                        </Text>
                    </Text>
                    <Text>
                        Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
                    </Text>
                    <Text>
                        Value:{" "}
                        <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
                    </Text>
                </View>
            );
        }
    }

    render() {
        // console.log(this.state.countryCode)
        return (
            <View style={{ flex: 1 }} >
                <ImageBackground source={require('../../../drawable/header.png')} resizeMode="cover" style={{ width: '100%', height: "70%" }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }} >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25 }} >Get riding within minutes</Text>
                        {/* {this.state.countryCode ? <View> */}
                        <View style={{ alignItems: 'center' }} >
                            {this.state.countryCode ? <PhoneInput
                                ref={ref => {
                                    this.phone = ref;
                                }}

                                style={{ padding: 10, width: '80%', borderBottomColor: '#fff', borderBottomWidth: 2 }}
                                onSelectCountry={(country) => this.phone.selectCountry(country)}
                                // initialCountry={this.state.countryCode.toLowerCase()}
                                onChangePhoneNumber={(number) => this.setState({ number })}
                                autoFormat
                            // value={this.state.number}
                            /> : <View />}
                            <Text style={{ color: '#fff', opacity: 0.7 }} >We'll send a text to verify your phone</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}  >
                        <Text style={{ color: '#fff', fontSize: 20 }} >or login with Facebook</Text>
                    </TouchableOpacity>

                </ImageBackground>


                <Button style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: "#f56200" }} >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }} >NEXT</Text>
                </Button>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        paddingTop: 60
    },
    info: {
        // width: 200,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginTop: 20
    },
    button: {
        marginTop: 20,
        padding: 10
    }
});

