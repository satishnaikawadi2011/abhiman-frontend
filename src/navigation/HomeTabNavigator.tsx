import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import StoriesListScreen from '../screens/StoriesListScreen';
import AddStoryScreen from '../screens/AddStoryScreen';
import CustomAddStoryTabButton from '../components/navigation/CustomAddStoryTabButton';
import ResourcesStackNavigator from './ResourcesStackNavigator';

const TabNavigator = createBottomTabNavigator();

const HomeTabNavigator = () => {
	return (
		<TabNavigator.Navigator
			defaultScreenOptions={{ tabBarActiveTintColor: Colors.primary, tabBarHideOnKeyboard: true }}
		>
			<TabNavigator.Screen
				name="Home"
				component={StoriesListScreen}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
				}}
			/>
			<TabNavigator.Screen
				name="AddStory"
				component={AddStoryScreen}
				options={({ navigation }) => ({
					tabBarButton: () => <CustomAddStoryTabButton onPress={() => navigation.navigate('AddStory')} />
				})}
			/>
			<TabNavigator.Screen
				name="Resources"
				component={ResourcesStackNavigator}
				options={{
					tabBarIcon: ({ color, size }) => <Foundation color={color} size={size} name="clipboard-notes" />
				}}
			/>
		</TabNavigator.Navigator>
	);
};

export default HomeTabNavigator;
