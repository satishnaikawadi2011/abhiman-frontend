import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeStore } from '../store/theme';
import AppNavigator from './AppNavigator';
import { CustomDarkTheme, CustomDefaultTheme } from '../theme';
import OfflineNotice from '../components/OfflineNotice';

const AppNavigationContainer = () => {
	const { isDarkTheme } = useThemeStore();
	const theme =
		isDarkTheme ? CustomDarkTheme :
		CustomDefaultTheme;
	return (
		<React.Fragment>
			<OfflineNotice />
			<NavigationContainer theme={theme}>
				<AppNavigator />
			</NavigationContainer>
		</React.Fragment>
	);
};

export default AppNavigationContainer;
