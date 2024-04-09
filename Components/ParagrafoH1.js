import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

const ParagrafoH1 = (props) => {
	const styles = useStyles();
	return (
		<View style={[styles.titulodiv, styles.container]}>
			<Text style={styles.titulo}>{props.conteudo}</Text>
		</View>
	);
};

function useStyles() {
	const { width, height } = useWindowDimensions();
	return StyleSheet.create({
		container: {
			alignItems: "center",
		},
		titulo: {
			width: width > 500 ? "auto" : 340,

			fontWeight: "500",
			fontSize: 30,
			color: "#344011",
		},
		titulodiv: {
			marginTop: width > 500 ? 0 : 100,

			marginLeft: 20,
		},
	});
}

export default ParagrafoH1;
