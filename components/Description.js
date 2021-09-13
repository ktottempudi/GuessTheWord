import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import information from './FileRetrieval';
import CheckOrientation from './CheckOrientation';

export default function Description({route, navigation}){
	const {title} = route.params;
	return(
		<View> 
			<Text style={styles.textStyle}> {information[title].Description} </Text>
			<TouchableOpacity style={styles.confirmButtonStyle} onPress={() => {
				navigation.navigate('CheckOrientation', {
					title: title
				});
			}}>
				<Text style={styles.textButtonStyle}>Ok</Text>
			</TouchableOpacity>
		</View>
		);
}

const styles = StyleSheet.create({
	confirmButtonStyle: {
		backgroundColor: 'blue',
		width: Dimensions.get('window').width/5,
	},

	textButtonStyle: {
		textAlign: 'center',
		color: 'white',
	},

	textStyle: {
		fontSize: 20,
	},
})