import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../../components/LinkButton';

const GetPaidScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../../assets/images/negotiation.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>GET PAID</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									Negotiating for a fair salary can be complicated. If you've never talked about money
									in a serious way with those outside of your family, it can feel awkward or intrusive
									but doing it can make a huge difference on your life, so give it a try.
								</Paragraph>
								<Subheading style={styles.subHeading}>"How much should I be making?"</Subheading>
								<Subheading style={styles.subHeading}>
									"How do I approach others in my field to find out what they're making?"
								</Subheading>
								<Subheading style={styles.subHeading}>
									"Is it going to reflect poorly on me for asking for a raise?"
								</Subheading>
								<Paragraph style={styles.paragraph}>
									You can and should be asking the hard questions about money. It's your livlihood and
									means a huge difference in your life, so why hold back?
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Get tips and resources on how to negotiate a better salary for yourself. Ask the
									hard questions about money to those in your life and at your job. It could change
									things dramatically.
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
											'https://www.forbes.com/sites/forbestechcouncil/2020/09/22/women-in-tech-15-ways-to-take-your-career-to-the-next-level/?sh=982643470ec9'
										)}
								>
									Take Your Career to the Next Level
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://ladiesgetpaid.com/')}>
									Ladies Get Paid
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.indeed.com/career-advice/pay-salary/how-to-negotiate-salary'
										)}
								>
									Tips To Negotiate Your Salary
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default GetPaidScreen;

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
