import React, { Fragment } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

function CardShop(props) {
	return (
		<TouchableOpacity style={styles.container} onPress={props.handleonPressCard}>
			<View style={styles.containerImage}>
				<Image
					//source={require('../assets/images/dogs.jpg')}
					source={{ uri: props.image }}
					imageStyle={{ opacity: 0.3 }}
					style={styles.image}
				/>
				{props.state === 'Abierto' ? (
					<Text style={styles.open}>{props.state}</Text>
				) : (
					<Text style={styles.Close}>{props.state}</Text>
				)}
			</View>
			<View style={styles.containerText}>
				<Text style={styles.title}>{props.title}</Text>
				<View style={styles.containerServices}>
					<Text style={styles.textService}>
						Domicilio:{' '}
						{props.domicilio === 'si' ? (
							<Text style={styles.green}>{props.domicilio}</Text>
						) : (
							<Text style={styles.red}>{props.domicilio}</Text>
						)}
					</Text>
					<Text style={styles.textService}>
						Pago online:{' '}
						{props.online === 'si' ? (
							<Text style={styles.green}>{props.online}</Text>
						) : (
							<Text style={styles.red}>{props.online}</Text>
						)}
					</Text>
				</View>
				<Text style={styles.text}>{props.barrio}</Text>
				<Text style={styles.text}>{props.direction}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 130,
		margin: '5%',
		flexDirection: 'row'
	},
	containerImage: {
		height: 90,
		flex: 1
	},
	image: {
		height: '100%',

		resizeMode: 'cover'
	},
	open: {
		color: '#59b56e',
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center'
	},
	Close: {
		color: '#f87e7b',
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center'
	},
	containerText: {
		flex: 2,
		marginLeft: 10
	},
	title: {
		color: '#000744',
		textAlign: 'center',
		fontSize: 18,
		marginVertical: 10,
		fontWeight: 'bold'
	},
	containerServices: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		marginRight: 10
	},
	containerDirection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: 10
	},
	textService: {
		color: '#5B7080',
		fontSize: 16
	},
	text: {
		color: '#5B7080',
		fontSize: 16,
		marginTop: 10
	},
	green: {
		color: '#59b56e',
		fontWeight: 'bold'
	},
	red: {
		color: '#f87e7b',
		fontWeight: 'bold'
	}
});

export default CardShop;
