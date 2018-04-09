import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => (
	<View style={styles.containerStyle}>
		<Text style={styles.labelStyle}>{label}</Text>
		<TextInput
			secureTextEntry={secureTextEntry}
			placeholder={placeholder}
			autoCorrect={false}
			style={styles.inputStyle}
			onChangeText={onChangeText}
			value={value} />
	</View>
);

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},

	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},

	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input }
