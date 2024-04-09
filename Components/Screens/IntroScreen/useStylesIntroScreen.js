import { StyleSheet, useWindowDimensions } from "react-native";

// Função para definir estilos usando as dimensões da janela
export const useStyleIntroScreen = () => {
	const { width } = useWindowDimensions();
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#E9F2CE",
			alignItems: "center",

			paddingTop: width > 500 ? 40 : 150,
		},
		buttonLandscape: {
			display: width > 500 ? "none" : "flex",
		},
		button: {
			width: 340,
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 12,
			paddingHorizontal: 32,
			borderRadius: 10,
			elevation: 3,
			backgroundColor: "#87A922",
			borderWidth: 2,
			borderColor: "#87A922",
			marginLeft: 10,
			marginBottom: 10,
		},
		text: {
			fontSize: 20,
			fontWeight: "bold",
			color: "#1B2109",
		},
		buttonSkip: {
			backgroundColor: "#E9F2CE",
		},
		buttonStart: {
			alignSelf: width > 500 ? "center" : "",
		},
	});
};
