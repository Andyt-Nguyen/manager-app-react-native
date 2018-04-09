import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './Common';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (val, prop) => {
			this.props.employeeUpdate({ prop, val });
		});
	}

	onBtnPress() {
		const { name, phone, shift } = this.props;
		console.log(name,phone,shift);
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onBtnPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.EmployeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeEdit);
