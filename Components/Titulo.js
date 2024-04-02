import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Titulo = () => {
	

	return (
		<View style={styles.titulodiv}>
				<Text style={styles.titulo}>Entrar</Text>
				<Text style={styles.subtitulo}>
					ou <Text style={styles.span}>cadastre-se</Text> no Eco
					pontos
				</Text>
			</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 60,
		width: 340,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "white",
	},
    titulo: {
		width: 340,
		fontWeight: "500",
		
		fontSize: 36,
		color: "#344011",
	},
    titulodiv: {
		marginBottom: 30,
	},
    subtitulo: {
		width: 300,
		color: "#344011",
		fontSize: 20,
	},
    span: {
		color: "#344011",
		fontWeight: "500",
	},
});

export default Titulo;
