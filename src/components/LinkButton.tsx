import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/colors';

interface IProps {
	children?: string;
	onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const LinkButton: React.FC<IProps> = ({ children, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<Text style={styles.button}>{children}</Text>
		</Pressable>
	);
};

export default LinkButton;

const styles = StyleSheet.create({
	button:
		{
			textAlign: 'center',
			textTransform: 'uppercase',
			fontWeight: '700',
			color: Colors.primary,
			letterSpacing: 1,
			margin: 5
		}
});
