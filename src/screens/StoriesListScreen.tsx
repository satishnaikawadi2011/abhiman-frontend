import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { collection, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { StoriesStackParamList } from '../navigation/AppNavigator';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { useStoryStore } from '../store/story';
import { Story } from '../models/Story';
import { db } from '../../config';
import StoryCard from '../components/StoryCard';
import AppLoader from '../animations/AppLoader';
import FavouritesButton from '../components/HeaderButtons/FavouritesButton';
import NotFound from '../animations/NotFound';
import { Title } from 'react-native-paper';
import ThemeToggleButton from '../components/HeaderButtons/ThemeToggleButton';

const transformData = (querySnapshot: QuerySnapshot<DocumentData>): Story[] => {
	let data: Story[] = [];
	querySnapshot.forEach((doc: any) => {
		const story: Story = {
			id: doc.id,
			author: doc.data().author,
			description: doc.data().description,
			title: doc.data().title,
			img_url: doc.data().img_url,
			work: doc.data().work
		};
		data.push(story);
	});
	return data;
};

type StoriesListScreenNavigationProp = StackNavigationProp<StoriesStackParamList, 'StoriesList'>;

type StoriesListScreenRouteProp = RouteProp<StoriesStackParamList, 'StoriesList'>;

interface StoriesLisScreenProps {
	navigation: StoriesListScreenNavigationProp;
	route: StoriesListScreenRouteProp;
}

const StoriesListScreen: React.FC<StoriesLisScreenProps> = ({ navigation, route }) => {
	const { loading, setLoading, setStories, stories } = useStoryStore();

	const request = async () => {
		setLoading(true);
		const querySnapshot = await getDocs(collection(db, 'stories'));
		const data = transformData(querySnapshot);
		setStories(data);
		setLoading(false);
	};

	useEffect(() => {
		request();
	}, []);

	if (loading) {
		return <AppLoader />;
	}

	if (stories.length === 0) {
		return (
			<View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<View>
					<NotFound />
					<Title style={{ textAlign: 'center' }}>Stories not available</Title>
				</View>
			</View>
		);
	}

	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={stories}
			onRefresh={request}
			refreshing={loading}
			renderItem={({ item }) => {
				return <StoryCard story={item} />;
			}}
		/>
	);
};

export default StoriesListScreen;

const styles = StyleSheet.create({});

export const screenOptions:
	| StackNavigationOptions
	| ((
			props: {
				route: RouteProp<StoriesStackParamList, 'StoriesList'>;
				navigation: any;
			}
		) => StackNavigationOptions)
	| undefined = ({ route }) => {
	const routeName = getFocusedRouteNameFromRoute(route);
	if (routeName === 'StoriesList') {
		return {
			title: 'Abhiman',
			headerRight:
				() => (
					<View style={{ display: 'flex', flexDirection: 'row' }}>
						<ThemeToggleButton />
						<FavouritesButton />
					</View>
				)
		};
	}
	else if (routeName === 'AddStory') {
		return {
			title: 'Share Your Story'
		};
	}
	else if (routeName === 'Resources') {
		return {
			// title: 'Resources'
			headerShown: false
		};
	}
	return {
		title: 'Abhiman',
		headerRight:
			() => (
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<ThemeToggleButton />
					<FavouritesButton />
				</View>
			)
	};
};
