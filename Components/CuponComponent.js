import {
	StyleSheet,
	Image,
	View,
	ImageBackground,
	Text,
	useWindowDimensions,
	ScrollView,
} from "react-native";

export default function CuponComponent({
	source,
	titulo,
	conteudo,
	pontos,
	pontosTXT,
}) {
	const styles = useStyles();
	return (
		<View>
			<ImageBackground
				source={require("../assets/Cupon.png")}
				style={styles.cupon}
				resizeMode="cover"
			>
				<View>
					<Image source={source} />
				</View>
				<View>
					<Text style={styles.tituloCupon}>{titulo}</Text>
					<Text style={styles.conteudoCupon}>{conteudo}</Text>
				</View>
				<View style={styles.CuponCusto}>
					<Text style={styles.pontosCupon}>{pontos}</Text>
					<Text style={styles.pontosCuponTexto}>{pontosTXT}</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

function useStyles() {
	const { width, height } = useWindowDimensions();
	return StyleSheet.create({
		cupon: {
			padding: 5,
			gap: 21,
			height: 85,
			flexDirection: "row",
			justifyContent: width > 500 ? "space-around" : "",
		},
		tituloCupon: {
			fontSize: 12,
			color: "#34401180",
			fontWeight: "bold",
		},
		conteudoCupon: {
			color: "#344011",
			width: width > 500 ? 380 : 180,
			fontSize: width > 500 ? 22 : 15,
		},
		pontosCupon: {
			fontSize: 34,
			fontWeight: "bold",
			color: "#87A922",
		},
		pontosCuponTexto: {
			fontSize: 16,
			color: "#34401180",
			fontWeight: "bold",
		},
		CuponCusto: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	});
}
