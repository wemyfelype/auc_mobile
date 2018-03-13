'use strict'
import React, { 
	AppRegistry,
	Component,
	Text,
	View,
	TouchableHighLight
} from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<View>
				<TouchableHighLight
					underlayColor={'#E8E8E8'}
					onPress={this.props.onPress}
					style={this.props.button_styles}>

					<View>
						<Text
							style={this.props.button_text_styles}>
							{this.props.text}

						</Text>
					</View>
				</TouchableHighlight>
			</View>			
		);
	}
}

AppRegistry.registerComponent('button', () => button)