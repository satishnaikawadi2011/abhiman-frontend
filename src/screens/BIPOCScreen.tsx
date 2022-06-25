import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Paragraph, Subheading, Title, Button } from 'react-native-paper';
import LinkButton from '../components/LinkButton';

const BIPOCScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image style={styles.image} source={require('../../assets/images/BIPOC.jpg')} />
					<View style={styles.container}>
						<View style={styles.subContainer}>
							<Title style={styles.title}>Black, Indigenous, and People of Color</Title>
						</View>
						<View style={{ flex: 1 }}>
							<View style={styles.subContainer}>
								<Paragraph style={styles.paragraph}>
									When looking at women's issues, intersectionality is extremely important to keep in
									mind. While all women face hardships because of gender, black women are
									disproportionately affected. Women make up approximately 25% of the working tech
									field. Of that 25%, only 3% are Black women, 5% Asian women, and 1% Latina women. We
									need to work to bridge this gap, and promote more diversity and inclusion in the
									workplace.
								</Paragraph>
								<Subheading style={styles.subHeading}>"No one here looks like me."</Subheading>
								<Paragraph style={styles.paragraph}>
									It can be isolating and alienating being the only person who looks like you in a sea
									of people who look and act similar. There's a place at the table for you, and there
									are others in the tech field that want to help and show you that you're not alone.
									Seeing faces like yours and hearing voices that speak to you in the field you're
									passionate about can be the fuel to get you where you need to be.
								</Paragraph>
								<Paragraph style={styles.paragraph}>
									Together we can change the landscape of what the technology field looks like, by
									showing up, being present, and pushing back on the status quo.
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
								<LinkButton onPress={() => Linking.openURL('https://www.blackgirlscode.com/')}>
									Black Girls Code
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://siliconangle.com/2020/06/12/actionable-advice-breaking-tech-staying-woman-color-womenintech/'
										)}
								>
									Breaking Into (And Staying In) Tech As A Woman Of Color
								</LinkButton>
								<LinkButton
									onPress={() =>
										Linking.openURL(
											'https://www.bbc.com/worklife/article/20200724-why-imposter-syndrome-hits-women-and-women-of-colour-harder'
										)}
								>
									Why Imposter Syndrome hits Women and Women of Colour Harder
								</LinkButton>
								<LinkButton onPress={() => Linking.openURL('https://www.blackgirlventures.org/')}>
									Black Girl Ventures
								</LinkButton>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default BIPOCScreen;

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
