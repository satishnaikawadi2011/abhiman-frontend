import { GestureResponderEvent, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Story } from '../models/Story';
import { useFavouritesStore } from '../store/favourites';
import { useNavigation } from '@react-navigation/native';

interface IProps {
	story: Story;
}

const StoryCard: React.FC<IProps> = ({ story }) => {
	const { addToFavourites, removeFromFavourites, isFavourite } = useFavouritesStore();
	const navigation: any = useNavigation();
	const isInFavourites = isFavourite(story.id);
	return (
		<Pressable style={styles.container} onPress={() => navigation.navigate('StoryDetail', { story })}>
			<ImageBackground source={{ uri: story.img_url }} style={styles.image} />
			<View style={styles.iconContainer}>
				{
					isInFavourites ? <MaterialCommunityIcons
						color={Colors.primary}
						size={35}
						name="heart"
						onPress={() => {
							removeFromFavourites(story.id);
							// setSnackbarVisible(true)
						}}
					/> :
					<MaterialCommunityIcons
						color={Colors.primary}
						size={35}
						name="heart-outline"
						onPress={() => {
							addToFavourites(story);
							// setSnackbarVisible(true)
						}}
					/>}
			</View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{story.title}</Text>
			</View>
		</Pressable>
	);
};

export default StoryCard;

const styles = StyleSheet.create({
	container:
		{
			height: 300,
			backgroundColor: 'red',
			borderRadius: 10,
			marginHorizontal: 20,
			marginVertical: 10,
			overflow: 'hidden'
		},
	image: { width: '100%', height: '100%' },
	title: { textTransform: 'capitalize', textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: '600' },
	titleContainer:
		{
			backgroundColor: 'rgba(0,0,0,0.5)',
			minHeight: 70,
			zIndex: 100,
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: 10
		},
	iconContainer: { position: 'absolute', top: 0, right: 0, padding: 20 }
});
