import { StyleSheet, useWindowDimensions } from "react-native";

// Função para definir estilos usando as dimensões da janela
export const useStyleLoginScreen = () => {
	const { width } = useWindowDimensions();
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#E9F2CE",
			alignItems: "center",
			gap: 10,
			paddingTop: 150,
			paddingBottom: 50,
		},
		texto: {
			color: "#344011",
			fontSize: 20,
		},
		link: {
			textDecorationLine: "underline",
			fontWeight: "500",
		},
		titulo: {
			fontWeight: "500",
			fontSize: 36,
			color: "#344011",
			width: 330,
			marginBottom: 20,
		},
		subtituloContainer: {
			width: 330,
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 10,
		},
		subtituloPart1: {
			color: "#344011",
			fontSize: 20,
		},
		subtituloPart2: {
			padding: 3,
			color: "#344011",
			fontWeight: "500",
		},
		subtituloPart3: {
			color: "#344011",
			fontSize: 20,
		},
		inputContainer: {
			width: 340,
			marginBottom: 10,
		},
		forgotPasswordContainer: {
			marginBottom: 10,
		},
	});
};
