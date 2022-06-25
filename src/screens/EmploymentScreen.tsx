import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../components/LinkButton';

const EmploymentScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/employment.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>
								Finding employment can be tough, especially for marginalized groups.
							</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									Less than 1 in 5 employees in the hi-tech industry are women, even though women make
									up more than 50% of the US workforce.
								</Paragraph>
								<Subheading style={styles.subHeading}>"How do I even start?"</Subheading>
								<Subheading style={styles.subHeading}>
									"What if the standard way into tech doesn't feel right to me?"
								</Subheading>
								<Subheading style={styles.subHeading}>"Will this employer be right for me?"</Subheading>
								<Paragraph style={styles.paragraph}>
									There are so many paths to explore when it comes to employment. Do you want to forgo
									a higher salary for a more equitable and inviting work environment? Starting with a
									list of what's important to you specifically helps to approach the daunting task of
									finding a job that's right for you. From finding places to apply to, to perfecting
									your interview process- there are vast resources out there to place you in the
									perfect position.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Don't let the hiring process overwhelm you- you've got this!
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
								<LinkButton onPress={() => Linking.openURL('https://www.hiretechladies.com/jobs')}>
									Tech Ladies: Job Board
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.adaslist.co/')}>
									Ada's List
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.womenwhocode.com/jobs')}>
									Women Who Code Job Board
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default EmploymentScreen;

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
