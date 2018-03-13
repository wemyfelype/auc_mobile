import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


class LoginForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {

    return (
      
      <View style={styles.container}>
      	<TextInput 
      		placeholder='Usuário'
      		placeholderTextColor='rgba(255,255,255,0.3)'
      		autoCorrect={false}
      		style={styles.input}
      		selectionColor='rgba(255,255,255,0.3)'
      		returnKeyType='next'
      		onSubmitEditing={() => this.passwordInput.focus()}
      		autoCapitalize='none' 
      		underlineColorAndroid='transparent' />
      	
      	<TextInput 
      		placeholder='Senha'
      		placeholderTextColor='rgba(255,255,255,0.3)'
      		secureTextEntry
      		style={styles.input}
      		selectionColor='rgba(255,255,255,0.3)'
      		returnKeyType='go'
      		ref={(input) => this.passwordInput = input}
      		autoCapitalize='none' 
      		underlineColorAndroid='transparent' />

      	<TouchableOpacity style={styles.buttonContainer}
          onPress={ () => this.props.navigation.navigate('Tabs') }
          >
      		<Text style={styles.buttonText}>Logar</Text>
      	</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		padding: 20
	},
	input:{
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		color: 'rgba(255,255,255,0.5)',
		marginBottom: 20,
		paddingHorizontal: 10,
		borderRadius: 10
	},
	buttonContainer:{
		backgroundColor: '#41014F',
		paddingVertical: 15
	},
	buttonText:{
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold'
	}
});


export default LoginForm;