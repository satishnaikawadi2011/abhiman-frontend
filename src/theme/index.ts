import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, configureFonts } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Colors } from '../constants/colors';
// import { fontConfig } from './fontConfig';

export const CustomDefaultTheme = {
	...NavigationDefaultTheme,
	...PaperDefaultTheme,
	colors:
		{
			...NavigationDefaultTheme.colors,
			...PaperDefaultTheme.colors,
			primary: Colors.primary,
			accent: Colors.accent
		}
	// fonts: configureFonts(fontConfig)
};

export const CustomDarkTheme = {
	...NavigationDarkTheme,
	...PaperDarkTheme,
	colors:
		{
			...NavigationDarkTheme.colors,
			...PaperDarkTheme.colors,
			primary: Colors.primary,
			accent: Colors.accent
		}
	// fonts: configureFonts(fontConfig)
};
