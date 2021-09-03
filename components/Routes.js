import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Welcome';
import Description from './Description';
import Tutorial from './Tutorial';
import CheckOrientation from './CheckOrientation';
import Game from './Game';

const {Navigator, Screen} = createNativeStackNavigator();

const ScreenNavigator = () => (
	<Navigator headerMode='none'>
	<Screen name="Welcome" component={Welcome} />
	<Screen name="Description" component={Description} />
	<Screen name="Tutorial" component={Tutorial} />
	<Screen name="CheckOrientation" component={CheckOrientation} />
	<Screen name="Game" component={Game} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<ScreenNavigator/>
	</NavigationContainer>	
);