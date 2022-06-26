import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import { useThemeStore } from './src/store/theme';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFavouritesStore } from './src/store/favourites';
import getDataFromAsyncStorageOnStart from './src/utils/getDataFromAsyncStorageOnStart';
import { CustomDarkTheme, CustomDefaultTheme } from './src/theme';
import StoryCard from './src/components/StoryCard';

export default function App() {
	const [
		isReady,
		setIsReady
	] = useState(false);
	const { setStories: b, setStoryIds: c } = useFavouritesStore();
	const { isDarkTheme, setIsDarkTheme: a } = useThemeStore();
	const theme =
		isDarkTheme ? CustomDarkTheme :
		CustomDefaultTheme;

	useEffect(
		() => {
			launch();
		},
		[
			isReady
		]
	);
	const launch = async () => {
		if (isReady) {
			setTimeout(() => SplashScreen.hideAsync(), 2000);
		}
	};
	const [
		loaded
	] = useFonts({
		UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
		UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
		UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
		UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf')
	});
	if (!loaded || !isReady) {
		return (
			<AppLoading
				autoHideSplash={false}
				onError={(error) => console.log('Error from AppLoading', error)}
				startAsync={() => getDataFromAsyncStorageOnStart(a, b, c)}
				onFinish={() => setIsReady(true)}
			/>
		);
	}
	return (
		<PaperProvider theme={theme}>
			<AppNavigationContainer />
			{/* <StoryCard
				img_url="https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				title="Title"
			/> */}
		</PaperProvider>
	);
}
