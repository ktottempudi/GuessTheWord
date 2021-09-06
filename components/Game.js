import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Game(){

	useEffect(() => {
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
	});
	return(
		<View> 
			<Text> In Game Screen </Text>
		</View>
		);
}