import { StyleSheet, Image, View, ImageBackground, Text } from "react-native";
import "../.expo/utils/i18n";
import { useTranslation } from "react-i18next";
export default function NavbarComponent() {
	const { t, i18n } = useTranslation();
	return (
		<View style={styles.navbar}>
			<View style={styles.navItem}>
				<Image source={require("../assets/home.png")} />
				<Text style={styles.navbarText}>{t("Início")}</Text>
			</View>

			<View style={styles.navItem}>
				<Image source={require("../assets/sell.png")} />
				<Text style={styles.navbarText}>{t("Descontos")}</Text>
			</View>

			<View style={styles.navItem}>
				<Image source={require("../assets/explore_nearby.png")} />
				<Text style={styles.navbarText}>{t("Coleta")}</Text>
			</View>

			<View style={styles.navItem}>
				<Image source={require("../assets/assignment_ind.png")} />
				<Text style={styles.navbarText}>{t("Perfil")}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar: {
		flexDirection: "row",
		backgroundColor: "black",
		width: "100%",
		justifyContent: "space-around",
		height: 79,
		alignItems: "center",
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
		
	},
	navbarText: {
		color: "white",
	},
	navItem: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
