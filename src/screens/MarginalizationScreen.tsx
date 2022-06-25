import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../components/LinkButton';

const MarginalizationScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/marginalization.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>What About Me Though?</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									Have you been down the google rabbit hole trying to find resources for someone like
									you and you found this site and were disappointed to see that you were not included?
									Have you looked for inclusive resources only to find that other people's version of
									inclusive does not include you?
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Well we want to help and we want your voice to be heard. Please join our team and
									submit content so others can hear your valuable voice and insights.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									We want to make sure everyone is included and acknowledged here. Your voice is
									valuable and what you contribute to tech is needed.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									In the meantime, please check out the following resources. If you're not seeing
									yourself represented, then whatever we can do to help you be the change you want to
									see, we're here to help.
								</Paragraph>
							</View>
						</View>
					</View>
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>Resources</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.bamtheagency.com/blog/2020/03/31/south-asian-women-in-tech'
										)}
								>
									South Asian Women Leading In Tech
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.weforum.org/agenda/2021/07/tech-focus-needs-marginalized-groups/'
										)}
								>
									Tech Needs To Focus On Marginalized Groups
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://rewritingthecode.org/')}>
									Rewriting The Code - inclusion matters
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default MarginalizationScreen;

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
			fontSize: 16,
			fontStyle: 'italic'
		},
	title:
		{
			fontSize: 25,
			fontWeight: 'bold',
			textAlign: 'center'
		},
	subContainer:
		{
			marginVertical: 8
		},
	paragraph:
		{
			textAlign: 'justify'
		}
});
