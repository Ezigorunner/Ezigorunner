import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Footer, Button, Icon, FooterTab, Spinner } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'

export default class VehicleRegistration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            motorcycle: true,
            car: false,
            fileUri: null,
            fileUriLoader: false,
            permitFrontImageUri: null,
            permitFrontImageUriLoader: false,
            permitBackImageUri: null,
            permitBackImageUriLoader: false,
            insuranceFrontImageUri: null,
            insuranceFrontImageUriLoader: false,
            insuranceBackImageUri: null,
            insuranceBackImageUriLoader: false
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

    openGallery = () => {
        let options = {
            title: 'Select Image',
            // customButtons: [
            //     { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            // ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
        ImagePicker.launchImageLibrary({}, (response) => {
            console.log('Response library= ', response);

            if (response.didCancel) {
                console.log('User cancelled image library');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    imageUri: 'data:image/jpeg;base64,' + response.data
                });
            }
        });
    }

    openCamera = (stateKey) => {
        this.setState({ [stateKey + "Loader"]: true })
        ImagePicker.launchCamera({}, (response) => {
            console.log('Response camera = ', response);
            if (response.didCancel) {
                console.log('User cancelled image camera');
            } else if (response.error) {
                console.log('camera Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    // filePath: response,
                    // fileData: response.data,
                    // fileUri: response.uri,
                    [stateKey]: response.uri,
                    [stateKey + "Loader"]: false
                });
            }
        })
    }

    render() {
        const { 
            permitBackImageUri, 
            permitFrontImageUri, 
            insuranceBackImageUri, 
            insuranceFrontImageUri, 
            fileUriLoader, 
            insuranceBackImageUriLoader, 
            insuranceFrontImageUriLoader,
            permitBackImageUriLoader,
            permitFrontImageUriLoader
            
         } = this.state
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                    <View style={{ flex: 1 }} >
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
                                    <Text onPress={() => this.setState({ motorcycle: false, car: true })} style={this.state.car ? { borderColor: '#000', borderWidth: 1, padding: 10, backgroundColor: 'orange', width: '30%' } : { borderColor: '#000', borderWidth: 1, padding: 10, width: '30%' }} >Car</Text>
                                </View>
                                <View>
                                    {fileUriLoader ? <Spinner color="orange" /> : <Image source={{ uri: this.state.fileUri ? this.state.fileUri : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png" }} style={{ width: "100%", height: 100, marginTop: 10 }} />}
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.openCamera("fileUri")} style={{ flexDirection: 'row' }}>
                                        <Icon name="camera" style={{ color: 'orange' }} />
                                        <Text style={{ padding: 5 }}>Camera</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.openGallery} style={{ flexDirection: 'row' }}>
                                        <Icon name="aperture" style={{ color: 'orange' }} />
                                        <Text style={{ padding: 5 }}>Gallery</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: 'gray' }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>VEHICLES PERMIT</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 10 }} >
                                {permitFrontImageUriLoader ? <Spinner color="orange" /> : (permitFrontImageUri ? <Image source={{ uri: permitFrontImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }} >
                                    <TouchableOpacity onPress={() => this.openCamera("permitFrontImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>front</Text>
                                    </TouchableOpacity>
                                </View>)}
                                {permitBackImageUriLoader ? <Spinner color="orange" /> : (permitBackImageUri ? <Image source={{ uri: permitBackImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.openCamera("permitBackImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>back</Text>
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>

                        <View style={{ padding: 10 }}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>VEHICLES INSURANCE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 10 }} >
                            {insuranceFrontImageUriLoader ? <Spinner color="orange" /> : (insuranceFrontImageUri ? <Image source={{ uri: insuranceFrontImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }} >
                                    <TouchableOpacity onPress={() => this.openCamera("insuranceFrontImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>front</Text>
                                    </TouchableOpacity>
                            </View>)}
                            {insuranceBackImageUriLoader ? <Spinner color="orange" /> : (insuranceBackImageUri ? <Image source={{ uri: insuranceBackImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', borderWidth: 3, borderColor: '#000', padding: 10, width: '40%', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.openCamera("insuranceBackImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>back</Text>
                                    </TouchableOpacity>
                            </View>)}
                            </View>
                        </View>

                    </View>
                </ScrollView>
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


