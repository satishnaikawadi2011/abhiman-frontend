import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import PrideAnimation from './src/animations/Pride';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { useEffect } from 'react';
import { firebaseConfig } from './config';
import AddStoryScreen from './src/screens/AddStoryScreen';

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default function App() {
	// useEffect(() => {
	// 	const func = async () => {
	// 		const querySnapshot = await getDocs(collection(db, 'stories'));
	// 		querySnapshot.forEach((doc) => {
	// 			console.log(doc.data());
	// 		});
	// 	};

	// 	func();
	// }, []);

	return <AddStoryScreen />;
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
