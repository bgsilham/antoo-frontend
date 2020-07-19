import React, { Component } from 'react';
import {
  Text, View, Alert, StyleSheet, Dimensions, TextInput,
  TouchableOpacity, StatusBar, KeyboardAvoidingView
}
  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class CreateNewPin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pin: ''
    }
  }
  verifPin = () => {
    const { email, pin } = this.state

    if (email !== '' && pin !== '') {
      this.props.navigation.navigate('create-new-pin-confirmation', { email: email, pin: pin })
    } else {
      Alert.alert('Oops!', 'Please fill the form')
    }

  }
  render() {
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Buat PIN Antoo Kamu</Text>
            </View>
            <SmoothPinCodeInput
              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={this.state.pin}
              onTextChange={pin => this.setState({ pin })}
            />
            <KeyboardAvoidingView behavior={'position'}>
              <View style={style.btnTopUpWrapper}>
                <TouchableOpacity style={style.btnTopUp} onPress={this.verifPin}>
                  <Text style={style.btnTopUpText}>BERIKUTNYA</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white'
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    alignItems: "center",
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 1,
  },
  header: {
    width: deviceWidth,
    height: 150,
    backgroundColor: 'white',
    padding: 25,
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
    color: '#583A8E'
  },
  forgetText: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
    color: '#01B0B7',
    alignSelf: 'center',
    marginTop: 30
  },
  btnTopUpWrapper: {
    marginTop: deviceHeight - 380,
    alignItems: "center",
    marginBottom: 150
  },
  btnTopUp: {
    width: deviceWidth - 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#01B0B7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTopUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  }
});