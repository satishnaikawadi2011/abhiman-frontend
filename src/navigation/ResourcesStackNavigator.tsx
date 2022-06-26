import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { defaltNavOptions } from './options/defaultNavigationOptions';
import { RouteProp } from '@react-navigation/core';
import ResourcesScreen from '../screens/ResourcesScreen';
import VoiceScreen from '../screens/resources/VoiceScreen';
import GetPaidScreen from '../screens/resources/GetPaidScreen';
import DisabilityScreen from '../screens/resources/DisabilityScreen';
import LGBTQScreen from '../screens/resources/LGBTQScreen';
import ImposterSyndromeScreen from '../screens/resources/ImposterSyndromeScreen';
import EmploymentScreen from '../screens/resources/EmploymentScreen';
import MarginalizationScreen from '../screens/resources/MarginalizationScreen';

export type ResourcesStackParamList = {
	Resources: undefined;
	BIPOC: undefined;
	Disability: undefined;
	Employment: undefined;
	GetPaid: undefined;
	ImposterSyndrome: undefined;
	Voice: undefined;
	Marginalization: undefined;
	LGBTQ: undefined;
};

export type ResourcesStackNavProps<T extends keyof ResourcesStackParamList> = {
	navigation: StackNavigationProp<ResourcesStackParamList, T>;
	route: RouteProp<ResourcesStackParamList, T>;
};

const StackNavigator = createStackNavigator<ResourcesStackParamList>();

const ResourcesStackNavigator = () => {
	return (
		<StackNavigator.Navigator screenOptions={defaltNavOptions}>
			<StackNavigator.Screen name="Resources" component={ResourcesScreen} />
			<StackNavigator.Screen name="Voice" component={VoiceScreen} />
			<StackNavigator.Screen name="GetPaid" component={GetPaidScreen} />
			<StackNavigator.Screen name="Disability" component={DisabilityScreen} />
			<StackNavigator.Screen name="LGBTQ" component={LGBTQScreen} />
			<StackNavigator.Screen name="ImposterSyndrome" component={ImposterSyndromeScreen} />
			<StackNavigator.Screen name="Employment" component={EmploymentScreen} />
			<StackNavigator.Screen name="Marginalization" component={MarginalizationScreen} />
			<StackNavigator.Screen name="BIPOC" component={ResourcesScreen} />
		</StackNavigator.Navigator>
	);
};

export default ResourcesStackNavigator;
