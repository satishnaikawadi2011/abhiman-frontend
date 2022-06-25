import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImposterSyndromeScreen from './src/screens/ImposterSyndromeScreen';
import LGBTQScreen from './src/screens/LGBTQScreen';
import VoiceScreen from './src/screens/VoiceScreen';

export default function App() {
	return <LGBTQScreen />;
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
