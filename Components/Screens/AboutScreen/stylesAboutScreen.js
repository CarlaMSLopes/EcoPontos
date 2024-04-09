import { StyleSheet, useWindowDimensions } from "react-native";

// Função para definir estilos usando as dimensões da janela
export const useStylesAboutScreen = () => {
	const { width } = useWindowDimensions();
	return StyleSheet.create({
		containerLogo: {
			display: width > 500 ? "none" : "flex",
		},
		container: {
			flex: 1,
			backgroundColor: "#E9F2CE",
			alignItems: "center",
			paddingTop: width > 500 ? 0 : 100,
			justifyContent: "space-around",
		},
		sectionTitle: {
			fontSize: 24,
			fontWeight: "bold",
			color: "#344011",
			marginBottom: 10,
		},
		teamMembers: {
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row",
			gap: 5,
			flexWrap: "wrap",
		},
		member: {
			color: "#344011",
			fontSize: 18,
			marginVertical: 5,
		},
		button: {
			marginTop: width > 500 ? 0 : 50,
			width: 300,
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 12,
			backgroundColor: "#87A922",
			borderRadius: 10,
			elevation: 3,
			borderWidth: 2,
			borderColor: "#87A922",
		},
		buttonText: {
			fontSize: 18,
			fontWeight: "bold",
			color: "#1B2109",
		},
		linktxt: {
			textDecorationLine: "underline",
			fontSize: 18,
			fontWeight: "500",
		},
		span: {
			fontWeight: "bold",
			color: "#344011",
		},
	});
};
