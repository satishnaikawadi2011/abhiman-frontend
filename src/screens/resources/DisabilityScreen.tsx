import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../../components/LinkButton';
import { useNavigation } from '@react-navigation/native';

const DisabilityScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../../assets/images/disability.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>Thriving in Tech as a Disabled Woman</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									As a disabled women in tech and one of the founders of this webpage, I have noticed
									a huge disparity of resources for persons with disabilities in the tech field. The
									pandemic has changed tech industry dramatically, creating many accessibility
									friendly jobs. It is our hope that we will see a shift in company cultures, and that
									inclusive hiring will become a common practice.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Gender equality remains a significant issue in the corporate world, and there are
									still some outstanding questions about what will power the future. The involvement
									and integration of women with disabilities in leading and influencing work is vital.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Diversity is important for many reasons, and ultimately creates better businesses.
									Empowerment enables women to participate fully in economic life across all sectors,
									which is essential in building stronger economies, achieving internationally agreed
									goals for development and sustainability, and improving communities and the lives of
									women, men, families within them.
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
											'https://news.vmware.com/dei/prioritizing-workers-with-disabilities-is-a-win-for-tech'
										)}
								>
									Re-Thinking Disability in Tech
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.inclusively.com/about-us')}>
									Inclusively: Job Matching and Hiring for persons with Disabilities
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.gigx.com/blog/empowerment-women-disabilities-tech-industry'
										)}
								>
									The Empowerment of Women with Disabilities in the Tech Industry
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.vanderbilt.edu/autismandinnovation/for-autistic-women//'
										)}
								>
									The First Center for Autism and Innovation
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default DisabilityScreen;

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
