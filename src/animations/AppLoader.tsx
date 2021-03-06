import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';

interface Props {}

const AppLoader: React.FC<Props> = ({}) => {
	const theme = useTheme();
	return (
		<LottieView
			style={{ backgroundColor: theme.colors.background }}
			source={require('../../assets/animations/loader.json')}
			autoPlay
			loop={true}
		/>
	);
};

export default AppLoader;

const styles = StyleSheet.create({});
