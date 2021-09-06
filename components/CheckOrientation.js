import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Game from './Game';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function CheckOrientation({navigation}){

	const isPortrait = () => {
		return Dimensions.get('window').height > Dimensions.get('window').width;
	}

	const[orientation, setOrientation] = useState(isPortrait() ? 'Portraint' : 'Landscape');

	useEffect(() => {
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
		const callback = () => setOrientation(isPortrait() ? 'Portrait' : 'Landscape');
		Dimensions.addEventListener('change', callback);
		return () => {
			Dimensions.removeEventListener('change', callback);
		};
	}, []);

	const goToGame = () => {
		if(orientation === 'Landscape'){
			navigation.navigate('Game');
		}
	}

	return(
		<View>
			<Text> To Begin the Game please orient your phone in Landscape mode. {orientation}</Text>
			{goToGame()}
		</View>
		);
}