import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

export type AuthStackParamList = {
	Welcome: undefined;
};

const StackNavigator = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
	return (
		<StackNavigator.Navigator screenOptions={{ headerShown: false }}>
			<StackNavigator.Screen name="Welcome" component={WelcomeScreen} />
		</StackNavigator.Navigator>
	);
};

export default AuthNavigator;
