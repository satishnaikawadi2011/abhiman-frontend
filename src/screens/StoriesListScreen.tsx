import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { collection, DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { StoriesStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import { useStoryStore } from '../store/story';
import { Story } from '../models/Story';
import { db } from '../../config';
import StoryCard from '../components/StoryCard';
import AppLoader from '../animations/AppLoader';

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

	return (
		<FlatList
			keyExtractor={(item) => item.id}
			data={stories}
			renderItem={({ item }) => {
				return <StoryCard story={item} />;
			}}
		/>
	);
};

export default StoriesListScreen;

const styles = StyleSheet.create({});
