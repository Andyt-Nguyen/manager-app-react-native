import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import RouterComponent from './RouterComponent';
import config from './config';
class App extends Component {
	componentWillMount() {
		// Initialize Firebase


	  firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

export default App;
