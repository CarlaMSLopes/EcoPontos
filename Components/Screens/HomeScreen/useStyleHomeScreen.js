import { StyleSheet, useWindowDimensions } from "react-native";

// Função para definir estilos usando as dimensões da janela
export const useStyleHomeScreen = () => {
	const { width } = useWindowDimensions();
	return StyleSheet.create({
		container: {
			justifyContent: "space-around",
			flex: 1,
			gap: 4,
			backgroundColor: "#E9F2CE",
			alignItems: "center",
		},
		sectionCupons: {
			backgroundColor: "#87A922",
			flex: 0,
			width: "100%",
			height: "70%",
			paddingTop: 120,
			paddingLeft: 16,
			paddingRight: 16,
			paddingBottom: 140,
			gap: 16,
		},
		curve: {
			position: "absolute",
			top: -16,
			zIndex: 0,
			elevation: 0,

			left: 0,
			right: 0,
			height: 100, // Altura da curva
			backgroundColor: "#E9F2CE",
			borderBottomLeftRadius: 100, // Raio para criar o arco na borda superior esquerda
			borderBottomRightRadius: 100, // Raio para criar o arco na borda superior direita
		},
		Perfilimg: {
			top: 20,
			position: "absolute",
			alignSelf: "center",
			zIndex: 1,
		},
		pontostxt: {
			fontSize: 60,
			fontWeight: "bold",
			color: "#87A922",
		},
		containerPontos: {
			justifyContent: "center",
			alignItems: "center",
			alignSelf: "center",
			zIndex: 1,
		},
		span: {
			fontSize: 16,
			color: "#34401160",
			fontWeight: "bold",
			textAlign: "center",
		},
		containerTop: {
			gap: 48,
		},
		subtitulo: {
			fontSize: 16,
			color: "#344011",
			fontWeight: "bold",
			marginTop: 16,
			marginLeft: 32,
		},
	});
};
