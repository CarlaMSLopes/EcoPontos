import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
	TxtInput,
	InputPassword,
	ButtonGoogle,
	Btn,
	Checkbox,
	Titulo,
} from "../ComponentsImports";

export default function LoginScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Titulo />

			<Text style={[styles.texto, styles.span]}>Email</Text>
			<TxtInput />
			<Text style={[styles.texto, styles.span]}>Senha</Text>
			<InputPassword texto="senha123" />
			<Checkbox />
			<Text style={[styles.texto, styles.span]}>Esqueceu a senha?</Text>
			<ButtonGoogle name="Entrar com google" />
			<Btn titulo="Entrar" />
			<StatusBar style="auto" />
		
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E9F2CE",
		alignItems: "center",
		justifyContent: "start",
		paddingTop: 150,
	},
	texto: {
		width: 340,
		color: "#344011",
		fontSize: 20,
	},

	span: {
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
});
