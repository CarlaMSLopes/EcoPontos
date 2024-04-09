import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, ScrollView } from "react-native";
import {
	ButtonGoogle,
	Btn,
	TxtInputWithLabel,
	ForgotPasswordButton,
	CheckboxComponent,
} from "../../ComponentsImports";
import { useStyleLoginScreen } from "./useStylesLoginScreen";
import "../../../.expo/utils/i18n";
import { useTranslation } from "react-i18next";

export default function LoginScreen({ navigation }) {
	const { t, i18n } = useTranslation();
	const [nome, setNome] = useState("");
	const [password, setPassword] = useState("");
	const styles = useStyleLoginScreen();
	const handleLogin = () => {
		navigation.navigate("Home", { nome: nome, password: password });
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.titulo}>{t("Entrar")}</Text>
				<View style={styles.subtituloContainer}>
					<Text style={styles.subtituloPart1}>{t("ou")}</Text>
					<Pressable onPress={() => navigation.navigate("Register")}>
						<Text style={[styles.link, styles.subtituloPart2]}>
							{t("Cadastre-se")}
						</Text>
					</Pressable>
					<Text style={styles.subtituloPart3}>
						{t("no Eco pontos")}
					</Text>
				</View>

				<TxtInputWithLabel
					label={t("Usuário ou Email")}
					value={nome}
					onchange={setNome}
				/>
				<TxtInputWithLabel
					label={t("Senha")}
					secureTextEntry
					value={password}
					onchange={setPassword}
				/>

				<CheckboxComponent label={t("Lembrar dos meus dados")} />

				<ForgotPasswordButton title={t("Esqueceu a senha?")} />

				<ButtonGoogle
					title={t("Entrar com google")}
					onPress={handleLogin}
				/>
				<Btn titulo={t("Entrar")} onPress={handleLogin} />

				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}
