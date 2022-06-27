import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Favourites from '../animations/Favourites';
import StoryCard from '../components/StoryCard';
import { useFavouritesStore } from '../store/favourites';

const FavouritesScreen = () => {
	const { stories } = useFavouritesStore();

	if (stories.length === 0) {
		return (
			<View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<View>
					<Favourites />
					<Title style={{ textAlign: 'center' }}>No favourites stories available,add some.</Title>
				</View>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				keyExtractor={(item) => item.id}
				data={stories}
				renderItem={({ item }) => {
					return <StoryCard story={item} />;
				}}
			/>
		</View>
	);
};

export default FavouritesScreen;

const styles = StyleSheet.create({
	title:
		{
			fontSize: 20,
			marginVertical: 20
		}
});
