import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";

const passwordInput = (props) => {
	const [text, onChangeText] = React.useState("");

	return (
		<SafeAreaView style={styles.inputparent}>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder={props.texto}
			/>
			<Image
				style={styles.tinyLogo}
				source={require("../assets/visibility.png")}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		flex: 1,
		padding: 10,
		height: 60,
		width: 340,
		margin: 12,
	},
	inputparent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "#000",
		padding: 20,
		height: 60,
		width: 340,
		margin: 12,
		backgroundColor: "white",
	},
	tinyLogo: {
		marginRight: 5,
	},
});

export default passwordInput;
