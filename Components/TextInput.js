import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputE = (props) => {
	const [text, onChangeText] = React.useState("");

	return (
		<SafeAreaView>
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder={props.texto}
			/>
		</SafeAreaView>
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
});

export default TextInputE;
