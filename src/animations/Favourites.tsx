import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';

interface Props {}

const Favourites: React.FC<Props> = ({}) => {
	const theme = useTheme();
	return (
		<LottieView
			style={{ backgroundColor: theme.colors.background, height: 400 }}
			source={require('../../assets/animations/favourites.json')}
			autoPlay
			loop={true}
			autoSize
			// speed={0.5}
		/>
	);
};

export default Favourites;

const styles = StyleSheet.create({});
