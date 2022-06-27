import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrideAnimation from '../animations/Pride';
import { Colors } from '../constants/colors';
import AppButton from '../components/AppButton';
import { StoriesStackParamList } from '../navigation/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenNavigationProp = StackNavigationProp<StoriesStackParamList, 'Welcome'>;

interface WelcomeScreenProps {
	navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: Colors.primary }}>
			<PrideAnimation />
			<Image style={{ width: '100%', height: 200 }} source={require('../../assets/images/pride_illu.png')} />
			<View style={{ marginHorizontal: 20, position: 'absolute', bottom: 30, width: '90%' }}>
				<AppButton
					title="Get Started"
					onPress={() => navigation.replace('StoriesList')}
					bgColor={Colors.accent}
				/>
			</View>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
