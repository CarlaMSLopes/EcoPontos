import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";

const TxtInputWithLabel = ({ label, secureTextEntry, onchange }) => (
	<View style={styles.inputContainer}>
		<Text style={[styles.texto, styles.span]}>{label}</Text>
		<TextInput style={styles.input} onChangeText={onchange} secureTextEntry={secureTextEntry} />
	</View>
);

const styles = {
	inputContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	texto: {
		color: "#344011",
		fontSize: 20,
	},
	span: {
		padding: 12,
	},input: {
		height: 60,
		width: 340,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "white",
		
	},
};

export default TxtInputWithLabel;
