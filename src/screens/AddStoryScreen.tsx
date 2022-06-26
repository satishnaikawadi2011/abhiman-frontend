import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import AppForm from '../components/Form/AppForm';
import AppFormField from '../components/Form/AppFormField';
import FormSubmitButton from '../components/Form/FormSubmitButton';
import { Snackbar, Text, useTheme } from 'react-native-paper';
import AppFormImagePicker from '../components/Form/AppFormImagePicker';
import { db, storage } from '../../config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import AppLoader from '../animations/AppLoader';
import { useStoryStore } from '../store/story';
import { Story } from '../models/Story';

const storyInitialValues = {
	fullName: '',
	title: '',
	description: '',
	work: '',
	images: []
};

const storySchema = Yup.object({
	fullName: Yup.string().required('Please write you full name'),
	title: Yup.string().required(),
	description: Yup.string().required(),
	work: Yup.string().required('Please write your current work position or any organization '),
	images: Yup.array().min(1, 'Please select at least one image.')
});

interface IProps {
	navigation: any;
}

const AddStoryScreen: React.FC<IProps> = ({ navigation }) => {
	const [
		loading,
		setLoading
	] = useState(false);

	const { stories, setStories } = useStoryStore();

	const handleSubmit = async (values: any, actions: any) => {
		const { fullName, title, description, work, images } = values;
		setLoading(true);
		const response = await fetch(images[0]);
		const blob = await response.blob();
		const a: string[] = images[0].split('.');
		const filename = a[a.length - 2];
		const storageRef = ref(storage, `/files/${filename}`);
		const snapshot = await uploadBytes(storageRef, blob);
		const url = await getDownloadURL(snapshot.ref);
		const docRef = await addDoc(collection(db, 'stories'), {
			author: fullName,
			title,
			description,
			work,
			img_url: url
		});
		setLoading(false);
		const newStory: Story = {
			author: fullName,
			title,
			description,
			work,
			img_url: url,
			id: docRef.id
		};
		setStories([
			newStory,
			...stories
		]);
		navigation.push('StoriesList');
	};

	if (loading) {
		return <AppLoader />;
	}

	return (
		<View style={{ flex: 1 }}>
			<ScrollView>
				<AppForm initialValues={storyInitialValues} validationSchema={storySchema} onSubmit={handleSubmit}>
					<AppFormImagePicker name="images" />
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
						placeholder="Work/organization/college"
						icon="office-building"
					/>
					<AppFormField
						name="title"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Title"
						icon="format-title"
					/>
					<AppFormField
						name="description"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder={`Write your story`}
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
