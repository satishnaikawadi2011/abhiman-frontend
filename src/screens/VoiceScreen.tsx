import { Image, Linking, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';

const VoiceScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/voice.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>How Can I Find My Voice?</Title>
						</View>
						{/* <Divider style={{ height: 0.2, backgroundColor: theme.colors.placeholder }} /> */}
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								{/* <Title>Details</Title> */}
								<Subheading style={styles.subHeading}>
									Speak Your Mind, Even If Your Voice Shakes
								</Subheading>
								<Paragraph style={styles.paragraph}>
									Feeling like you can't get a word in and people won't stop talking over you?
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									For a lot of women, it's hard to speak up and take up your full space. Embracing our
									own authenticity can feel scary at first. The following are resources to help you
									find your voice and feel empowered to claim your seat at the table.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									You have it in you to find your voice and use it. We want to provide the resources
									for you to feel supported and in control.
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
								<Button mode="text" onPress={() => Linking.openURL('https://www.inhersight.com/blog')}>
									InHerSight - Career Resources
								</Button>
								<Button mode="text" onPress={() => Linking.openURL('https://chicktech.org/')}>
									ChickTech - Support For Marginalized People
								</Button>
								<Button mode="text" onPress={() => Linking.openURL('https://www.mothercoders.org/')}>
									[MotherCoders] - Helping Those With Kids Thrive In Tech
								</Button>
								<Button
									mode="text"
									onPress={() =>
										Linking.openURL('https://womenignitingchange.com/blog/how-to-find-your-voice/')}
								>
									Women Igniting Change - How to Find Your Voice
								</Button>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default VoiceScreen;

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
	buttonsContainer:
		{
			width: '100%'
		},
	paragraph:
		{
			textAlign: 'justify'
		}
});
