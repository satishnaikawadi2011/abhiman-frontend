import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VoiceScreen from './src/screens/VoiceScreen';

export default function App() {
	return <VoiceScreen />;
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
