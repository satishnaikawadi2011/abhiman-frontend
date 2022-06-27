import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '@react-navigation/native';

interface Props {}

const NotFound: React.FC<Props> = ({}) => {
	const theme = useTheme();
	return (
		<LottieView
			style={{ height: 400, backgroundColor: theme.colors.background }}
			source={require('../../assets/animations/not-found.json')}
			autoPlay
			loop={true}
		/>
	);
};

export default NotFound;

const styles = StyleSheet.create({});
