import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ProductLayout(props) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Titulo del producto</Text>
				<Image
					source={{
						uri: 'http://www.mascotiendalagranja.com/wp-content/uploads/2018/08/arroz-2.jpg'
					}}
					style={styles.imageProduct}
				/>
				<ScrollView style={styles.containerDescription}>
					<Text style={styles.description}>
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content here', making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for (injected humour and the like). It is a long
						established fact that a reader will be distracted by the readable content of a page when looking
						at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
						of letters, as opposed to using 'Content here, content here', making it look like readable
						English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
						default model text, and a search for (injected humour and the like). It is a long established
						fact that a reader will be distracted by the readable content of a page when looking at its
						layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English.
						Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
						text, and a search for (injected humour and the like). It is a long established fact that a
						reader will be distracted by the readable content of a page when looking at its layout. The
						point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
						opposed to using 'Content here, content here', making it look like readable English. Many
						desktop publishing packages and web page editors now use Lorem Ipsum as their default model
						text, and a search for (injected humour and the like).
					</Text>
				</ScrollView>
				<View style={styles.containerPrice}>
					<Text style={styles.price}>${props.total}</Text>
					<View style={styles.containerButtonsAcount}>
						<Text style={styles.account}>{props.contador}</Text>
						<TouchableOpacity onPress={props.handlePressAddPrice}>
							<Text style={styles.buttonAdd}>+</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={props.handlePressRemovePrice} style={{ aliginSelf: 'center' }}>
							<Text style={styles.buttonRemove}>-</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View />
			</View>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	title: {
		marginTop: 20,
		marginBottom: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#5B7080',
		textAlign: 'center',
		marginHorizontal: '5%'
	},
	imageProduct: {
		alignSelf: 'center',
		height: 150,
		width: '100%',
		resizeMode: 'contain',
		marginVertical: 10
	},
	containerDescription: {
		height: '50%',
		marginHorizontal: '5%'
	},
	description: {
		color: '#000744',
		fontSize: 18
	},
	containerPrice: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: '5%'
	},
	containerButtonsAcount: {
		flexDirection: 'row-reverse',
		marginTop: 30,
		color: 'red'
	},
	account: {
		fontSize: 30,
		marginLeft: 20,
		color: '#59b56e'
	},
	price: {
		fontSize: 30,
		marginLeft: 20,
		alignSelf: 'flex-end',
		color: '#59b56e'
	},
	buttonAdd: {
		fontSize: 30,
		marginLeft: 20,
		color: '#59b56e',
		alignSelf: 'auto'
	},
	buttonRemove: {
		fontSize: 30,
		color: '#F87E7B'
	}
});

export default ProductLayout;
