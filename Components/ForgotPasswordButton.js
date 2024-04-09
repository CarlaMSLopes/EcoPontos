import React from "react";
import { Pressable, Text } from "react-native";

const ForgotPasswordButton = ({ onPress, title }) => (
	<Pressable style={styles.forgotPasswordContainer} onPress={onPress}>
		<Text style={[styles.texto, styles.link]}>{title}</Text>
	</Pressable>
);

const styles = {
	forgotPasswordContainer: {
		marginBottom: 10,
		width: 330,
	},
	texto: {
		color: "#344011",
		fontSize: 20,
		textDecorationLine: "underline",
		fontWeight: "500",
	},
	link: {
		textDecorationLine: "underline",
		fontWeight: "500",
	},
};

export default ForgotPasswordButton;
