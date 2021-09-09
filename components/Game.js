import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Game(){

	const [startTimer, setStartTimer] = useState(5);

	useEffect(() => {
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
		let interval = setInterval(() => {
			setStartTimer(lastStartTimer => {
				if(startTimer <= 1){
					clearInterval(interval);
					return false;
				}
				return lastStartTimer - 1;
			})
		}, 1000);
		return () => clearInterval(interval);
	});
	return(
		<View> 
			<Text> In Game Screen </Text>
			<Text> {startTimer} </Text>
		</View>
		);
}