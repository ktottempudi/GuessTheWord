import React from 'react';
import {Button, Text, View} from 'react-native';
export default function Tutorial(){
	return(
		<View>
			<Text> Welcome to the tutorial. Please choose a deck from the given List. After choosing a deck and confirming it then
				you will have to place the phone on your forehead in landscape mode and will have a total of 60 seconds to guess
				as many of the words as you can. Good Luck and enjoy the game.
			  </Text>

			  <Button title="Skip"/>
		</View>
		);
}