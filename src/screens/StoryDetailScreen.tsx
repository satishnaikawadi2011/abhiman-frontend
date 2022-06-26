import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { StoriesStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import { Paragraph, Subheading, Title } from 'react-native-paper';

type StoryDetailScreenNavigationProp = StackNavigationProp<StoriesStackParamList, 'StoryDetail'>;

type StoryDetailScreenRouteProp = RouteProp<StoriesStackParamList, 'StoryDetail'>;

interface StorytDetailScreenProps {
	route: StoryDetailScreenRouteProp;
	navigation: StoryDetailScreenNavigationProp;
}

const StoryDetailScreen: React.FC<StorytDetailScreenProps> = ({ navigation, route }) => {
	const story = route.params.story;

	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={{ uri: story.img_url }} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>{story.title}</Title>
						</View>
						<View style={styles.subContainer}>
							<Text style={styles.author}>{story.author}</Text>
							<Subheading style={styles.subHeading}>{story.work}</Subheading>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>{story.description}</Paragraph>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default StoryDetailScreen;

const styles = StyleSheet.create({
	image:
		{
			width: '100%',
			height: 350
		},
	container:
		{
			padding: 20,
			flex: 1
		},
	subHeading:
		{
			fontSize: 14,
			fontStyle: 'italic'
		},
	title:
		{
			fontSize: 25,
			fontWeight: 'bold'
		},
	subContainer:
		{
			marginVertical: 8
		},
	paragraph:
		{
			textAlign: 'justify',
			fontSize: 16
		},
	author: { fontSize: 17, fontWeight: '500' }
});

export const screenOptions:
	| StackNavigationOptions
	| ((
			props: {
				route: RouteProp<StoriesStackParamList, 'StoryDetail'>;
				navigation: any;
			}
		) => StackNavigationOptions)
	| undefined = ({ navigation, route }) => {
	return {
		title: route.params.story.title
	};
};
