import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Logo, ParagrafoH1 } from "../ComponentsImports";
const slides = [
	{
		key: 1,
		title: "slide 1",
		text: "EcoPontos é um aplicativo de pontos de reciclagem.",
	},
	{
		key: 3,
		title: "slide 3",
		text: "Você entrega materiais nos pontos de coleta em Recife e junta pontos em troca de benefícios, descontos e muito mais!.",
	},
	{
		key: 4,
		title: "slide 4",
		text: "Essa sua primeira vez? Vamos começar!",
	},
];
_renderNextButton = () => {
	return (
		<View style={styles.button}>
			<Text style={styles.text}>proximo</Text>
		</View>
	);
};
_renderSkipButton = () => {
	return (
		<View style={[styles.button, styles.buttonSkip]}>
			<Text style={styles.text}>Pular</Text>
		</View>
	);
};

_renderItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Logo />
			<ParagrafoH1 conteudo={item.text} />
		</View>
	);
};

export default function IntroScreen({ navigation }) {
	return (
		<AppIntroSlider
			renderItem={this._renderItem}
			data={slides}
			activeDotStyle={{ backgroundColor: "#87A922" }}
			bottomButton
			showSkipButton
			renderNextButton={this._renderNextButton}
			renderSkipButton={this._renderSkipButton}
			renderDoneButton={() => (
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("login")}
				>
					<Text style={styles.text}>Começar</Text>
				</Pressable>
			)}
		/>
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
	button: {
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
		marginLeft: 10,
		marginBottom: 10,
	},
	text: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#1B2109",
	},
	buttonSkip: {
		backgroundColor: "#E9F2CE",
	},
});
