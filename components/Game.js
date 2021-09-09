import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Welcome from './Welcome';

export default function Game({navigation}){

	const [startTimer, setStartTimer] = useState(5);
	const [gameBegan, setGameBegan] = useState(1);
	const [resetTimer, setResetTimer] = useState(false);

	useEffect(() => {
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
		let interval = setInterval(() => {
			setStartTimer(lastStartTimer => {
				if(startTimer <= 1){
					clearInterval(interval);
					setGameBegan(gameBegan + 1);
					return false;
				}
				return lastStartTimer - 1;
			})
		}, 1000);
		if(gameBegan == 2 && resetTimer == false){
			setStartTimer(60);
			setResetTimer(true);
		}
		if(gameBegan == 3){
			ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
			navigation.navigate('Welcome');
		}
		return () => clearInterval(interval);
	});

	return(
		<View> 
			<Text> In Game Screen </Text>
			<Text> {startTimer} </Text>
		</View>
		);
}