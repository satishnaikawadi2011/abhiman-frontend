import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Colors } from '../constants/colors';

interface Props {}

const PrideAnimation: React.FC<Props> = ({}) => {
	return (
		<LottieView
			source={require('../../assets/animations/pride.json')}
			autoPlay
			loop={true}
			style={{ backgroundColor: Colors.primary, height: 400 }}
		/>
	);
};

export default PrideAnimation;

const styles = StyleSheet.create({
	container:
		{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: 20
		},
	message:
		{
			fontWeight: 'bold',
			fontSize: 20,
			marginVertical: 10,
			textAlign: 'center'
		}
});
