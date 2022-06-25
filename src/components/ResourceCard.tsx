import {
	GestureResponderEvent,
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle
} from 'react-native';
import React from 'react';

interface IProps {
	onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
	title: string;
	textStyles?: StyleProp<TextStyle>;
	containerStyles?: StyleProp<ViewStyle>;
}

const ResourceCard: React.FC<IProps> = ({ onPress, title, containerStyles, textStyles }) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.container,
				containerStyles
			]}
		>
			<Text
				style={[
					styles.text,
					textStyles
				]}
			>
				{title}
			</Text>
		</Pressable>
	);
};

export default ResourceCard;

const styles = StyleSheet.create({
	container:
		{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: 200,
			backgroundColor: '#000',
			borderRadius: 20,
			margin: 20
		},
	text:
		{
			color: '#fff',
			fontSize: 20,
			fontWeight: '500'
		}
});
