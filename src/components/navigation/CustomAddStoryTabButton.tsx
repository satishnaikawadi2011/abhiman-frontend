import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Colors } from '../../constants/colors';

interface Props {
	onPress?: () => void;
}

const CustomAddStoryTabButton: React.FC<Props> = ({ onPress }) => {
	const theme = useTheme();
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					{ borderColor: theme.colors.background }
				]}
			>
				<MaterialCommunityIcons name="plus-circle" size={40} color={theme.colors.background} />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CustomAddStoryTabButton;

const styles = StyleSheet.create({
	container:
		{
			backgroundColor: Colors.primary,
			height: 80,
			width: 80,
			borderRadius: 40,
			bottom: 30,
			borderWidth: 10,
			alignItems: 'center',
			justifyContent: 'center'
		}
});
