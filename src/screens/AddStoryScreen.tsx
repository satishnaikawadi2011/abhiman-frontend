import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import AppForm from '../components/Form/AppForm';
import AppFormField from '../components/Form/AppFormField';
import FormSubmitButton from '../components/Form/FormSubmitButton';
import { RadioButton, Snackbar, Text, useTheme } from 'react-native-paper';

const storyInitialValues = {
	fullName: '',
	title: '',
	description: '',
	work: ''
};

const storySchema = Yup.object({
	fullName: Yup.string().required(),
	title: Yup.string().required(),
	description: Yup.string().required(),
	work: Yup.string().required()
});

const AddStoryScreen = () => {
	const handleSubmit = (values: any, actions: any) => {
		const { fullName, title, description, work } = values;
		console.log(values);
		actions.resetForm({});
		// setSnackbarVisible(true);
	};

	return (
		<View style={{ flex: 1 }}>
			{/* <Snackbar
				visible={!!error || snackbarVisible}
				onDismiss={() => setSnackbarVisible(false)}
				duration={error?5000:3000}
			>
				{
					error ? error :
					'Added your story successfully'}
			</Snackbar> */}

			<ScrollView>
				<AppForm initialValues={storyInitialValues} validationSchema={storySchema} onSubmit={handleSubmit}>
					<AppFormField
						name="fullName"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Full Name"
						textContentType="name"
						icon="rename-box"
					/>
					<AppFormField
						name="work"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Work/organization/university"
						textContentType="jobTitle"
						icon="office-building"
					/>
					<AppFormField
						name="title"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Title"
						icon="format-title"
						style={{ backgroundColor: 'red' }}
					/>
					<AppFormField
						name="description"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Write your story"
						// icon="account-voice"
						style={{ backgroundColor: 'red' }}
						multiline
					/>
					<FormSubmitButton title={'post your story'} />
				</AppForm>
			</ScrollView>
		</View>
	);
};

export default AddStoryScreen;

const styles = StyleSheet.create({
	inputRow:
		{
			flexDirection: 'row',
			justifyContent: 'space-around'
		},
	smallInput:
		{
			width: '45%'
		},
	row:
		{
			flexDirection: 'row',
			alignItems: 'center'
		}
});
