import { getFavouritesDataFromAsyncStorage } from '../store/favourites';
import { getThemeDataFromAsyncStorage } from '../store/theme';

const getDataFromAsyncStorageOnStart = (setIsDarkTheme: Function, setStories: Function, setStoryIds: Function) => {
	const getThemeData = async () => {
		const themeData = await getThemeDataFromAsyncStorage();
		if (themeData) {
			setIsDarkTheme(themeData.isDarkTheme);
		}
	};
	const getFavouritesData = async () => {
		const favouritesData = await getFavouritesDataFromAsyncStorage();
		if (favouritesData) {
			setStories(favouritesData.favourites);
			setStoryIds(favouritesData.ids);
		}
	};
	getFavouritesData();
	getThemeData();
	return new Promise<void>((resolve, reject) => {
		resolve();
	});
};

export default getDataFromAsyncStorageOnStart;
