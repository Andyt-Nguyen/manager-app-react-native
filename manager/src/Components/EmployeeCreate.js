import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './Common';

class EmployeeCreate extends Component {

	onBtnPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeEdit({name, phone, shift: shift || "Monday"});
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onBtnPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps, {
	employeeUpdate, employeeCreate
})(EmployeeCreate);
