import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Welcome';
import Description from './Description';
import Tutorial from './Tutorial';

const {Navigator, Screen} = createNativeStackNavigator();

const ScreenNavigator = () => (
	<Navigator headerMode='none'>
	<Screen name="Welcome" component={Welcome} />
	<Screen name="Description" component={Description} />
	<Screen name="Tutorial" component={Tutorial} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<ScreenNavigator/>
	</NavigationContainer>	
);