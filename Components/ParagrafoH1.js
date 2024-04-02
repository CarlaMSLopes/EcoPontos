import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ParagrafoH1 = (props) => {
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

		fontSize: 30,
		color: "#344011",
	},
	titulodiv: {
		marginTop:100,
		marginLeft: 20,
		
	},
});

export default ParagrafoH1;
