import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

interface Props {
	imageUris: string[];
	onRemoveImage?: any;
	onAddImage?: any;
}

const ImageInputList: React.FC<Props> = ({ imageUris = [], onRemoveImage, onAddImage }) => {
	const scrollView: any = useRef();

	return (
		<View>
			<ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
						</View>
					))}
					<ImageInput onChangeImage={(uri: any) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container:
		{
			flexDirection: 'row'
		},
	image:
		{
			marginRight: 10
		}
});

export default ImageInputList;
