import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Welcome from './Welcome';
import information from './FileRetrieval';
import {DeviceMotion} from 'expo-sensors';

export default function Game({route, navigation}){

	const {title} = route.params;
	const deckData = information[title].data;
	let keys = Object.keys(deckData);

	const [startTimer, setStartTimer] = useState(5);
	const [gameBegan, setGameBegan] = useState(1);
	const [resetTimer, setResetTimer] = useState(false);
	const [guess, setGuess] = useState(deckData[keys[Math.floor(Math.random() * keys.length)]]);
	const [angle, setAngle] = useState(0);
	const [data, setData] = useState();

	//DeviceMotion.setUpdateInterval(1000);

	rotation = {
		angle: 0,
	}

	useEffect(() => {
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
		let interval = setInterval(() => {
			setStartTimer(lastStartTimer => {
				if(startTimer <= 1){
					clearInterval(interval);
					setGameBegan(gameBegan + 1);
					return false;
				}
				if(gameBegan === 2){
					DeviceMotion.addListener(({rotation}) => {

						//console.log(rotation.beta);

						setData(rotation.beta);
						setAngle(1);
						DeviceMotion.removeAllListeners();
					});
				}
				return lastStartTimer - 1;
			})
		}, 1000);
		if(gameBegan === 2 && resetTimer === false){
			setStartTimer(60);
			setResetTimer(true);
		}
		if(gameBegan === 3){
			DeviceMotion.removeAllListeners();
			ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
			navigation.navigate('Welcome');
		}
		return () => clearInterval(interval);
	});

	return(
		<View> 
			<Text> In Game Screen </Text>
			<Text> {startTimer} </Text>
			<Text> {guess} </Text>
			<Text> The Current Angle of rotation is {angle} </Text>
			<Text> The data that is being recorded for first index is {data} </Text>
		</View>
		);
}