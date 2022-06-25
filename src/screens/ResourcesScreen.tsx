import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ResourceCard from '../components/ResourceCard';

interface IResource {
	title: string;
	id: string;
}

const resources: IResource[] = [
	{ title: 'Find Your Voice', id: 'voice' },
	{ title: 'Imposter Syndrome', id: 'imp_syn' },
	{ title: 'Get Paid', id: 'paid' },
	{ title: 'LGBTQ In Tech', id: 'lgbtq' },
	{ title: 'Disability Tech', id: 'disability' },
	{ title: 'BIPOC', id: 'bipoc' },
	{ title: 'Marginalized Women', id: 'minority' },
	{ title: 'Finding Employment', id: 'employment' }
];

const ResourcesScreen = () => {
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
