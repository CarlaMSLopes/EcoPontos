import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function checkbox() {
	const [isChecked, setChecked] = useState(false);

	return (
		<View style={styles.section}>
			<Checkbox
				style={styles.checkbox}
				value={isChecked}
				onValueChange={setChecked}
			/>
			<Text style={styles.paragraph}>Lembrar dos meus dados</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
		marginVertical: 3,
	},
	section: {
		width: 350,
		flexDirection: "row",
		alignItems: "center",
	},
	paragraph: {
		fontSize: 15,
	},
	checkbox: {
		margin: 8,
		
	},
});
