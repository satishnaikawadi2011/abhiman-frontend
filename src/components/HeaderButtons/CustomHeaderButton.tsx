import React from 'react';
import { HeaderButton, HeaderButtonProps } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Colors } from '../../constants/colors';

const CustomHeaderButton: React.FC<HeaderButtonProps> = (props) => {
	return (
		<HeaderButton
			IconComponent={Ionicons}
			iconSize={23}
			color={

					Platform.OS === 'android' ? 'white' :
					Colors.primary
			}
			{...props}
		/>
	);
};

export default CustomHeaderButton;
