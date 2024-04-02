import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function button(props) {
	const { onPress, title = "Entrar" } = props;
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{props.titulo}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 340,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#87A922",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#87A922",
	},
	text: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#1B2109",
	},
});
