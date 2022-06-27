import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './CustomHeaderButton';

const FavouritesButton = () => {
	const navigation: any = useNavigation();
	return (
		<View style={{ marginRight: 10 }}>
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Add"
					iconName={
						'heart-circle-sharp'
						// Platform.OS === 'android' ? 'md-add' :
						// 'ios-add'
					}
					onPress={() => {
						navigation.navigate('Favourites');
					}}
				/>
			</HeaderButtons>
		</View>
	);
};

export default FavouritesButton;
