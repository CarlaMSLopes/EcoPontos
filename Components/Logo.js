import { StyleSheet, Image, View } from "react-native";

export default function Logo() {
	return (
		<View>
			<Image style={styles.logo} source={require("../assets/Logo.png")} />
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {},
});
