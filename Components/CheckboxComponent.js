import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "expo-checkbox";

const CheckboxComponent = ({ label }) => {
	const [isChecked, setChecked] = useState(false);

	return (
		<View style={styles.section}>
			<Checkbox
				style={styles.checkbox}
				value={isChecked}
				onValueChange={setChecked}
			/>
			<Text style={styles.paragraph}>{label}</Text>
		</View>
	);
};

const styles = {
	section: {
		width: 340,
		flexDirection: "row",
		alignItems: "center",
	},
	checkbox: {
		margin: 8,
	},
	paragraph: {
		fontSize: 15,
		color: "#344011",
	},
};

export default CheckboxComponent;
