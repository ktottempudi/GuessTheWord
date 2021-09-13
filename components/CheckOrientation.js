import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Game from './Game';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function CheckOrientation({route, navigation}){

	const {title} = route.params;

	const isPortrait = () => {
		return Dimensions.get('window').height > Dimensions.get('window').width;
	}

	const[orientation, setOrientation] = useState(isPortrait() ? 'Portraint' : 'Landscape');

	useEffect(() => {
		ScreenOrientation.unlockAsync();
		const callback = () => {setOrientation(isPortrait() ? 'Portrait' : 'Landscape')};
		Dimensions.addEventListener('change', callback);
		if(orientation === 'Landscape'){
			navigation.navigate('Game', {
				title: title
			});
		}
		return () => {
			Dimensions.removeEventListener('change', callback);
		};
	}, [orientation]);

	const goToGame = () => {
		if(orientation === 'Landscape'){
			navigation.navigate('Game');
		}
	}

	return(
		<View>
			<Text> To Begin the Game please orient your phone in Landscape mode.</Text>
			
		</View>
		);
}