import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';

export default function CheckOrientation(){

	const isPortrait = () => {
		return Dimensions.get('window').height > Dimensions.get('window').width;
	}

	const[orientation, setOrientation] = useState(isPortrait() ? 'Portraint' : 'Landscape');

	useEffect(() => {
		const callback = () => setOrientation(isPortrait() ? 'Portrait' : 'Landscape');
		Dimensions.addEventListener('change', callback);
		return () => {
			Dimensions.removeEventListener('change', callback);
		};
	}, []);

	return(
		<View>
			<Text> To Begin the Game please orient your phone in Landscape mode. </Text>
			<Text> {isPortrait() ? "Portrait" : "Landscape"} </Text>
			
		</View>
		);
}