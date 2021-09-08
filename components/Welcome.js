import React, {useEffect} from 'react';
import {StyleSheet, Button, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Description from './Description';
import * as ScreenOrientation from 'expo-screen-orientation';
//import {useNavigation} from '@react-navigation/native';

export default function Welcome({ navigation }){
	let availabe = require('../Decks/Available Decks.json');

	useEffect(() => {
		ScreenOrientation.unlockAsync();
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
	});

	const getDescription = () => {
		navigation.navigate('Description');
	}
	return(
		<View>
			<Text> Welcome Screen </Text>
			<View style={styles.container}>
				{availabe.Playable.map((item) => {
					return <View style={styles.viewStyle} key={item.Title}>
					<TouchableOpacity key={item.Title} style={styles.buttonStyle} onPress={() => {
						navigation.navigate('Description', {
							title: item.Title,
						});
					}}>
					<Text style={styles.textStyle}>{item.Title}</Text>
					</TouchableOpacity>
					</View>
				})}
			</View>
		</View>
		);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: Dimensions.get('window').width,
		justifyContent: 'space-evenly',
	},

	viewStyle: {
		width: Dimensions.get('window').width / 2.2,
		margin: 5,
	},

	buttonStyle: {
		backgroundColor: 'blue',
	},

	textStyle: {
		textAlign: 'center',
		color: 'white',
	},

})