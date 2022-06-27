import React from 'react';
import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
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
import BIPOCScreen from '../screens/resources/BIPOCScreen';

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
			<StackNavigator.Screen name="Voice" component={VoiceScreen} options={{ title: 'Find Your Voice' }} />
			<StackNavigator.Screen name="GetPaid" component={GetPaidScreen} options={{ title: 'Get Paid' }} />
			<StackNavigator.Screen
				name="Disability"
				component={DisabilityScreen}
				options={{ title: 'Disability Tech' }}
			/>
			<StackNavigator.Screen name="LGBTQ" component={LGBTQScreen} options={{ title: 'LGBTQ In Tech' }} />
			<StackNavigator.Screen
				name="ImposterSyndrome"
				component={ImposterSyndromeScreen}
				options={{ title: 'Imposter Syndrome' }}
			/>
			<StackNavigator.Screen
				name="Employment"
				component={EmploymentScreen}
				options={{ title: 'Finding Employment' }}
			/>
			<StackNavigator.Screen
				name="Marginalization"
				component={MarginalizationScreen}
				options={{ title: 'Marginalized Women' }}
			/>
			<StackNavigator.Screen name="BIPOC" component={BIPOCScreen} options={{ title: 'BIPOC' }} />
		</StackNavigator.Navigator>
	);
};

export default ResourcesStackNavigator;
