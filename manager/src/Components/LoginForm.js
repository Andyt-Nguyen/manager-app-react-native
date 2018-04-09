import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './Common';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text)
	}

	onPasswordChange(password){
		this.props.passwordChanged(password)
	}

	onBtnPress() {
		const { email, password, loginUser } = this.props;
		loginUser(email,password)
	}

	renderBtn() {
		if(this.props.loading) {
			return <Spinner size="large" />;
		} else {
			return (
				<Button onPress={this.onBtnPress.bind(this)}>
					Login
				</Button>
			)
		}
	}

	renderError() {
		if(this.props.error) {
			return (
				<View style={{backgroundColor:'#fff'}}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label={'Email'}
						placeholder={'email@email.com'}
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email} />
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label={'Password'}
						placeholder={'password'}
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password} />
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderBtn()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		color: 'red',
		fontSize: 20,
		alignSelf: 'center'
	}
}

const mapStateToProps = (state) => {
	const { email, password, error, loading } = state.auth;
	return {
		email,
		password,
		error,
		loading
	}
}


export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);
