import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Footer, Button, Icon, FooterTab, Spinner, List, Left, ListItem, Body } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'

export default class IdentityCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            IdentityCardFrontImageUri: null,
            IdentityCardFrontImageUriLoader: false,
            IdentityCardBackImageUri: null,
            IdentityCardBackImageUriLoader: false,
            drivingLisenceFrontImageUri: null,
            drivingLisenceFrontImageUriLoader: false,
            drivingLisenceBackImageUri: null,
            drivingLisenceBackImageUriLoader: false,
            passportImageUri: null,
            passportImageUriLoader: false,
        }
    }


    static navigationOptions = {
        title: 'Identity Card/Passport',
        headerStyle: {
            backgroundColor: "#f56200"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: '#fff',
        },
        headerRight: <Icon name="search" color="#fff" style={{ color: '#fff', marginLeft: -40 }} />
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
                this.setState({ [stateKey + "Loader"]: false })
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
            IdentityCardFrontImageUri,
            IdentityCardFrontImageUriLoader,
            drivingLisenceFrontImageUri,
            drivingLisenceFrontImageUriLoader,
            passportImageUri,
            passportImageUriLoader,
            IdentityCardBackImageUri,
            IdentityCardBackImageUriLoader,
            drivingLisenceBackImageUri,
            drivingLisenceBackImageUriLoader
        } = this.state
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                    <View style={{ flex: 1 }} >
                        <View>
                            <List>
                                <ListItem>
                                    <Left>
                                        <View style={{ backgroundColor: 'skyblue', height: 20, width: 20, marginTop: 7 }} />
                                        <Text style={{ marginLeft: 10, fontSize: 20 }} >Identity Card (Optional)</Text>
                                    </Left>
                                </ListItem>
                            </List>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }} >
                                {IdentityCardFrontImageUriLoader ? <Spinner color="orange" /> : (IdentityCardFrontImageUri ? <Image source={{ uri: IdentityCardFrontImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', padding: 10, width: '40%', alignItems: 'center' }} >
                                    <TouchableOpacity onPress={() => this.openCamera("IdentityCardFrontImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>front</Text>
                                    </TouchableOpacity>
                                </View>)}
                                {IdentityCardBackImageUriLoader ? <Spinner color="orange" /> : (IdentityCardBackImageUri ? <Image source={{ uri: IdentityCardBackImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', padding: 10, width: '40%', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.openCamera("IdentityCardBackImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>back</Text>
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>

                        <View>
                            <List>
                                <ListItem>
                                    <Left>
                                        <View style={{ backgroundColor: 'orange', height: 20, width: 20, marginTop: 7 }} />
                                        <Text style={{ marginLeft: 10, fontSize: 20 }} >Driving Lisence (Optional)</Text>
                                    </Left>
                                </ListItem>
                            </List>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }} >
                                {drivingLisenceFrontImageUriLoader ? <Spinner color="orange" /> : (drivingLisenceFrontImageUri ? <Image source={{ uri: drivingLisenceFrontImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', padding: 10, width: '40%', alignItems: 'center' }} >
                                    <TouchableOpacity onPress={() => this.openCamera("drivingLisenceFrontImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>front</Text>
                                    </TouchableOpacity>
                                </View>)}
                                {drivingLisenceBackImageUriLoader ? <Spinner color="orange" /> : (drivingLisenceBackImageUri ? <Image source={{ uri: drivingLisenceBackImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', padding: 10, width: '40%', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => this.openCamera("drivingLisenceBackImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>back</Text>
                                    </TouchableOpacity>
                                </View>)}
                            </View>
                        </View>

                        <View>
                            <List>
                                <ListItem>
                                    <Left>
                                        <View style={{ backgroundColor: 'orange', height: 20, width: 20, marginTop: 7 }} />
                                        <Text style={{ marginLeft: 10, fontSize: 20 }} >Passport (Optional)</Text>
                                    </Left>
                                </ListItem>
                            </List>

                            <View style={{ flexDirection: 'row', padding: 10, marginLeft: '6%' }} >
                                {passportImageUriLoader ? <Spinner color="orange" /> : (passportImageUri ? <Image source={{ uri: passportImageUri }} style={{ width: '40%', height: 100 }} /> : <View style={{ backgroundColor: 'lightgray', padding: 10, width: '40%', alignItems: 'center' }} >
                                    <TouchableOpacity onPress={() => this.openCamera("passportImageUri")} style={{ alignItems: 'center' }}>
                                        <Icon name="camera" style={{ fontSize: 50 }} />
                                        <Text>front</Text>
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


