import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BIPOCScreen from './src/screens/BIPOCScreen';
import DisabilityScreen from './src/screens/DisabilityScreen';
import ImposterSyndromeScreen from './src/screens/ImposterSyndromeScreen';
import LGBTQScreen from './src/screens/LGBTQScreen';
import MarginalizationScreen from './src/screens/MarginalizationScreen';
import VoiceScreen from './src/screens/VoiceScreen';

export default function App() {
	return <MarginalizationScreen />;
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
