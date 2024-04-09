import { StyleSheet, useWindowDimensions } from "react-native";

// Função para definir estilos usando as dimensões da janela
export const useStylesWelcomeScreen = () => {
	const { width } = useWindowDimensions();
	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "space-around",
			backgroundColor: "#E9F2CE",
			alignItems: "center",
		},
		contentContainer: {
			alignItems: "center",
		},
		texto: {
			color: "#344011",
			fontSize: 14,
			lineHeight: 38,
		},
		link: {
			width: 320,
			marginTop: 20,
		},
		linktxt: {
			textDecorationLine: "underline",
			fontSize: 18,
			fontWeight: "500",
		},
		button: {
			marginTop: 20,
			width: 340,
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 12,
			borderRadius: 10,
			backgroundColor: "#87A922",
			borderWidth: 2,
			borderColor: "#87A922",
		},
		buttonText: {
			fontSize: 20,
			fontWeight: "bold",
			color: "#1B2109",
		},
		changeLanguageContainer: {
			flexDirection: "row",
			gap: 16,
			width: 300,
		},
		buttonLenguage: {
			// Botão de linguagem
			backgroundColor: "transparent",
		},
	});
};
