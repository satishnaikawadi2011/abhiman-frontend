import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useThemeStore } from '../../store/theme';
import CustomHeaderButton from './CustomHeaderButton';

const ThemeToggleButton = () => {
	const navigation: any = useNavigation();
	const { isDarkTheme, setIsDarkTheme } = useThemeStore();
	return (
		<View style={{ marginRight: 10 }}>
			<HeaderButtons
				HeaderButtonComponent={(props: any) => (
					<CustomHeaderButton {...props} IconComponent={MaterialIcons} title={'Dark'} />
				)}
			>
				<Item
					title="Add"
					iconName={

							isDarkTheme ? 'lightbulb' :
							'nightlight-round'
					}
					onPress={() => {
						if (isDarkTheme) {
							setIsDarkTheme(false);
						}
						else {
							setIsDarkTheme(true);
						}
					}}
				/>
			</HeaderButtons>
		</View>
	);
};

export default ThemeToggleButton;
