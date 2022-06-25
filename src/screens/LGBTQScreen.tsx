import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../components/LinkButton';

const LGBTQScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/lgbtq.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>LGBTQ+ in Technology</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									There has been a lack of diversity in IT that not only has underrepresented groups
									such as though under the LGBTQ+ umbrella feeling alienated, but also often unsafe as
									well.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									According to a study from Blind in 2020, only 76% of LGBQ respondents said they felt
									safe in the workplace, and only 64% of those members from the trans and gender
									non-confirming community felt safe.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Tech companies have notoriously been seen as quite progressive, but there are many
									areas where there is room for improvement. We need workplace policies to continue to
									support the LGBTQ+ community and aid in improving these numbers, not just
									surrounding safety, but also inclusion and representation.
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
									onPress={() => Linking.openURL('https://lesbianswhotech.org/pridesummit2022/')}
								>
									Lesbians Who Tech: Queer, Inclusive, Badass
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.lgbtech.com/')}>
									LGBTech
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://outintech.com/intl-pronouns-day-five-ways-to-establish-a-safe-and-respectful-space-for-all-employees/'
										)}
								>
									Out in Tech: Five Ways to Establish A Safe and Respectful Space for All Employees
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.ostem.org/')}>
									oSTEM: Out in Science, Technology, Engineering, and Mathematics
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default LGBTQScreen;

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
