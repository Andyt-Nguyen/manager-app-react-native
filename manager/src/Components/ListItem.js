import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './Common';

class ListItem extends Component {

	onRowPress() {
		Actions.employeeEdit({ employee: this.props });
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
					<Text style={styles.titleStyle}>{this.props.name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;
