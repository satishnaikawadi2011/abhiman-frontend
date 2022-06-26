import { createStackNavigator } from '@react-navigation/stack';
import { defaltNavOptions } from './options/defaultNavigationOptions';
import React from 'react';
import { Story } from '../models/Story';
import HomeTabNavigator from './HomeTabNavigator';
import StoryDetailScreen from '../screens/StoryDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export type StoriesStackParamList = {
	StoriesList: undefined;
	StoryDetail: { story: Story };
	Favourites: undefined;
	Welcome: undefined;
};

const StoriesStackNavigator = createStackNavigator<StoriesStackParamList>();

const AppNavigator = () => {
	return (
		<StoriesStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<StoriesStackNavigator.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
			<StoriesStackNavigator.Screen
				name="StoriesList"
				component={HomeTabNavigator}
				// options={ProductListScreenOptions}
			/>
			<StoriesStackNavigator.Screen
				name="StoryDetail"
				component={StoryDetailScreen}
				// options={ProductDetailScreenOptions}
			/>
			<StoriesStackNavigator.Screen name="Favourites" component={FavouritesScreen} />
		</StoriesStackNavigator.Navigator>
	);
};

export default AppNavigator;
