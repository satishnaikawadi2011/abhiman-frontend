import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Story } from '../models/Story';

type FavouritesStore = {
	stories: Story[];
	storyIds: string[];
	setStoryIds: (storyIds: string[]) => void;
	setStories: (stories: Story[]) => void;
	addToFavourites: (story: Story) => void;
	removeFromFavourites: (storyId: string) => void;
	isFavourite: (storyId: string) => boolean;
};

export const useFavouritesStore = create<FavouritesStore>((set, get) => ({
	stories: [],
	storyIds: [],
	setStories: (stories) => set((state) => ({ ...state, stories })),
	setStoryIds: (storyIds) => set((state) => ({ ...state, storyIds })),
	addToFavourites:
		(story) => {
			get().setStories([
				story,
				...get().stories
			]);
			get().setStoryIds([
				story.id,
				...get().storyIds
			]);
			saveFavouritesDataToAsyncStorage(get().stories, get().storyIds);
		},
	removeFromFavourites:
		(storyId) => {
			const favouriteStories = get().stories;
			const updatedFavouriteStories = favouriteStories.filter((story) => story.id !== storyId);
			const updatedStoryIds = get().storyIds.filter((sId) => sId !== storyId);
			get().setStories(updatedFavouriteStories);
			get().setStoryIds(updatedStoryIds);
			saveFavouritesDataToAsyncStorage(get().stories, get().storyIds);
		},
	isFavourite:
		(storyId) => {
			const favouriteStories = get().stories;
			const isInFavourites = favouriteStories.find((story) => story.id === storyId);
			if (isInFavourites) {
				return true;
			}
			return false;
		}
}));

const saveFavouritesDataToAsyncStorage = (stories: Story[], storyIds: string[]) => {
	AsyncStorage.setItem('favouritesData', JSON.stringify({ favourites: stories, ids: storyIds }));
};

export const getFavouritesDataFromAsyncStorage = async () => {
	const favouritesData: any = await AsyncStorage.getItem('favouritesData');
	if (favouritesData) {
		return JSON.parse(favouritesData);
	}
	return null;
};
