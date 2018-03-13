import React, {Component} from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TextInput,
	Image,
	Button,
	KeyboardAvoidingView
} from 'react-native';


import LoginForm from '../components/LoginForm'


export default class Login extends Component{

	state = {
		username: '',
	    password: '',
	    isLoggingIn: false,
	    message: '',
	    msg: 'fuck you'
	}

	

	render(){
		return(

				<KeyboardAvoidingView beravior='padding' style={style.container}>
					<View style={style.logoContainer}>
						
						<Image 
							style={style.logo}
							source={ require('../images/logo.png') } />
						<Text style={style.title}> AUC - Cascavel </Text>
					</View>

					<View style={style.form}>
						<LoginForm />
					</View>
				</KeyboardAvoidingView>
			)
	}

}

const style = StyleSheet.create({

		container:{
			flex: 1,
			backgroundColor: '#50085f'
		},
		logoContainer:{
			flexGrow: 1,
			justifyContent: 'center',
			alignItems: 'center'	    
		},
		logo:{
			width: 100,
			height: 100 
		},
		title:{
			color: '#fff',
			width: 160,
			marginTop: 10,
			textAlign: 'center',
			opacity: 0.8  
		}

})

