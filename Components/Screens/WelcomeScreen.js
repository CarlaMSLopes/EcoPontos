import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Logo,ParagrafoH1 } from "../ComponentsImports";

export default function WelcomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Logo />
			<ParagrafoH1 conteudo="Bem vindo ao EcoPontos!"/>
            <Pressable
				style={styles.link}
				onPress={() => navigation.navigate("About")}
			>
				<Text style={[styles.texto, styles.span, styles.linktxt]}>
					Sobre nós
				</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Intro")}
			>
				<Text style={styles.Buttontext}>Proximo</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E9F2CE",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 120,
	},
	texto: {
		width: 340,
		color: "#344011",
		fontSize: 14,
		lineHeight: 38,
	},

	span: {
		marginLeft: 12,
		marginTop: 40,

		color: "#344011",
		fontWeight: "500",
	},
	
	linktxt: {
		textDecorationLine: "underline",
		fontSize: 26,
	},
	button: {
        marginTop:300,
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
