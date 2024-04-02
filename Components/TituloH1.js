import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TituloH1 = (props) => {
	return (
		<View style={styles.titulodiv}>
			<Text style={styles.titulo}>{props.conteudo}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titulo: {
		width: 340,
		fontWeight: "500",

		fontSize: 36,
		color: "#344011",
	},
	titulodiv: {
		marginLeft: 100,
	},
});

export default TituloH1;
