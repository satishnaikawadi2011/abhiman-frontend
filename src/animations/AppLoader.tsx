import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {}

const AppLoader: React.FC<Props> = ({}) => {
	return <LottieView source={require('../../assets/animations/loader.json')} autoPlay loop={true} />;
};

export default AppLoader;

const styles = StyleSheet.create({});
