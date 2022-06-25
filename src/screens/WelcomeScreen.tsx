import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrideAnimation from '../animations/Pride';
import { Colors } from '../constants/colors';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.primary }}>
			<PrideAnimation />
			<Image style={{ width: '100%', height: 200 }} source={require('../../assets/images/pride_illu.png')} />
			<View style={{ marginHorizontal: 20, position: 'absolute', bottom: 30, width: '90%' }}>
				<AppButton title="Get Started" bgColor={Colors.accent} />
			</View>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
