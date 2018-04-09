import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';

const RouterComponent = () => (
	<Router>
		<Scene key="root" hideNavBar>
			<Scene key="auth">
				<Scene initial key="login" component={LoginForm} title="Please Login" />
			</Scene>

			<Scene key="main">
				<Scene
					initial
					rightTitle="Add"
					onRight= {() => Actions.employeeCreate() }
					key="employeeList"
					component={EmployeeList}
					title="Employees" />

				<Scene
					key="employeeCreate"
					component={EmployeeCreate}
					title="Create Employee" />

				<Scene
					key="employeeEdit"
					component={EmployeeEdit}
					title="Edit Employee" />

			</Scene>


		</Scene>
	</Router>
);

export default RouterComponent;
