import { StyleSheet, Text, View } from 'react-native';
import PrideAnimation from './src/animations/Pride';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
	return <WelcomeScreen />;
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
