import React from "react";
import { Text, StyleSheet, Pressable, Image } from "react-native";

export default function buttonGoogle(props) {
	const { onPress, title = "Entrar com o Google" } = props;
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<Image
				style={styles.tinyLogo}
				source={require("../assets/google3.png")}
			/>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: 30,
		marginRight: 10,
	},
	button: {
		flexDirection: "row",
		width: 340,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		
		backgroundColor: "rgba(52, 52, 52, 0.1)",
		marginBottom: 15,
		marginTop: 25,
		borderWidth: 0.5,
		borderRadius: 10,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#344011",
	},
});
