import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import { Colors } from '../constants/colors';
import LinkButton from '../components/LinkButton';

const ImposterSyndromeScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/imposter-syndrome.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>What is Imposter Syndrome?</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Subheading style={styles.subHeading}>"I don't belong here."</Subheading>
								<Subheading style={styles.subHeading}>"I'll never figure this out."</Subheading>
								<Subheading style={styles.subHeading}>
									"Everyone is further along than I am."
								</Subheading>
								<Paragraph style={styles.paragraph}>
									Imposter Syndrome: A pattern in which one doubts their skills, talents, or
									accomplishments as has a persistent fear of being perceived as a 'fraud'. It
									disproportionately affects high-achieving people, who find it difficult to accept
									their accomplishments.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									We all have these old messages that loop on a reel when we feel out of our depth.
									While we may feel like we must be the only ones feeling this way, the feeling is far
									from unique.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Furthermore, as women, people of color, those with disabilities, LGBTQ, minorities,
									or other marginalized groups, we often battle with microaggressions, bias and
									exclusion that can add to our universal feelings of doubt.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									The solution is to work towards equitable spaces, creating environments that foster
									individual acceptance while pushing to reduce the dominant model of heteronormative,
									Eurocentric, masculine leadership styles.
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
											'https://www.websiteplanet.com/blog/the-empowering-guide-for-women-in-tech/'
										)}
								>
									The Empowering Guide for Women in Tech
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL('https://builtin.com/career-development/imposter-syndrome')}
								>
									Imposter Syndrome: How to Overcome It at Work
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.bbc.com/worklife/article/20200724-why-imposter-syndrome-hits-women-and-women-of-colour-harder'
										)}
								>
									Why Imposter Syndrome hits Women and Women of Colour Harder
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://hbr.org/2021/02/stop-telling-women-they-have-imposter-syndrome'
										)}
								>
									Harvard Business Review: Stop Telling Women They Have Imposter Syndrome
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default ImposterSyndromeScreen;

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
