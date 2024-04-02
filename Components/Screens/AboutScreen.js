import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Logo } from "../ComponentsImports";

export default function AboutScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Logo />
			<Text style={[styles.texto, styles.span]}>Equipe</Text>
			<Text style={styles.texto}>
				{" "}
				Carla Lopes – 01440665 {"\n"}
				João Siqueira - 01590594 {"\n"}
				Thiago Souza – 01582033 {"\n"}
				Iago Silva – 01598123 {"\n"}
				Alexandre Silva - 01648836 {"\n"}
				Ottom Oliveira - 01644403 {"\n"}
				Breno Santos – 10008876 {"\n"}
				Arthur Santos - 01570824
			</Text>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.Buttontext}>Voltar</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E9F2CE",
		alignItems: "center",
		justifyContent: "start",
		paddingTop: 120,
	},
	texto: {
		width: 340,
		color: "#344011",
		fontSize: 18,
		lineHeight: 38,
		marginLeft: 100,
	},

	span: {
		marginLeft: 264,
		marginTop: 40,

		color: "#344011",
		fontWeight: "500",
	},
	link: {
		marginTop: 36,
	},
	linktxt: {
		textDecorationLine: "underline",
		fontSize: 26,
	},
	button: {
		marginTop: 100,
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

		marginBottom: 10,
	},
	Buttontext: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#1B2109",
	},
});
