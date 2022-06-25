import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ResourceCard from './src/components/ResourceCard';
import ResourcesScreen from './src/screens/ResourcesScreen';

export default function App() {
	return <ResourcesScreen />;
	// return (
	//   <View style={styles.container}>
	//     <Text>Hello World!</Text>
	//     <StatusBar style="auto" />
	//   </View>
	// );
}

const styles = StyleSheet.create({
	container:
		{
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center'
		}
});
