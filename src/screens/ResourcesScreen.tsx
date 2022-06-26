import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ResourceCard from '../components/ResourceCard';
import { useNavigation } from '@react-navigation/native';

interface IResource {
	title: string;
	id: string;
	name: string;
}

const resources: IResource[] = [
	{ title: 'Find Your Voice', id: 'voice', name: 'Voice' },
	{ title: 'Imposter Syndrome', id: 'imp_syn', name: 'ImposterSyndrome' },
	{ title: 'Get Paid', id: 'paid', name: 'GetPaid' },
	{ title: 'LGBTQ In Tech', id: 'lgbtq', name: 'LGBTQ' },
	{ title: 'Disability Tech', id: 'disability', name: 'Disability' },
	{ title: 'BIPOC', id: 'bipoc', name: 'BIPOC' },
	{ title: 'Marginalized Women', id: 'minority', name: 'Marginalization' },
	{ title: 'Finding Employment', id: 'employment', name: 'Employment' }
];

const ResourcesScreen = () => {
	const navigation: any = useNavigation();
	return (
		<View style={styles.container}>
			<FlatList
				data={resources}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<ResourceCard
							title={item.title}
							textStyles={

									item.id === 'paid' ? styles.textStyle :
									{}
							}
							containerStyles={(styles as any)[item.id]}
							onPress={() => navigation.navigate(item.name)}
						/>
					);
				}}
			/>
		</View>
	);
};

export default ResourcesScreen;

const styles = StyleSheet.create({
	voice:
		{
			backgroundColor: '#E40303'
		},
	imp_syn:
		{
			backgroundColor: '#FF8C00'
		},
	paid:
		{
			backgroundColor: '#FFED00'
		},
	lgbtq:
		{
			backgroundColor: '#008026'
		},
	disability:
		{
			backgroundColor: '#004DFF'
		},
	bipoc:
		{
			backgroundColor: '#750787'
		},
	minority: { backgroundColor: '#5BCEFA' },
	employment: { backgroundColor: '#F5A9B8' },
	container:
		{
			flex: 1
		},
	textStyle:
		{
			color: '#000'
		}
});
