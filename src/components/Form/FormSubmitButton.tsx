import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppButton from '../AppButton';

interface SubmitButtonProps {
	title: string;
	loading?: boolean;
	disabled?: boolean;
}

const FormSubmitButton: React.FC<SubmitButtonProps> = ({ title, loading, disabled }) => {
	const { handleSubmit } = useFormikContext();
	return <AppButton disabled={disabled} loading={loading} title={title} onPress={handleSubmit} />;
};

export default FormSubmitButton;

const styles = StyleSheet.create({});
