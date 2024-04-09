import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, ScrollView } from "react-native";
import {
	Btn,
	TxtInputWithLabel,
	CheckboxComponent,
} from "../../ComponentsImports"; // Importando componentes
import { useStyleRegisterScreen } from "./useStyleRegisterScreen"; // Importando estilos customizados
import "../../../.expo/utils/i18n"; // Importando configurações de internacionalização
import { useTranslation } from "react-i18next"; // Importando hook de tradução

// Componente de registro de usuário
export default function RegisterScreen({ navigation }) {
	const { t } = useTranslation(); // Obtendo a função de tradução
	const styles = useStyleRegisterScreen(); // Obtendo estilos usando o hook useStyleRegisterScreen

	return (
		<ScrollView>
			<View style={styles.container}>
				{/* Título */}
				<Text style={styles.titulo}>{t("Cadastre-se")}</Text>
				{/* Subtítulo e link para a tela de login */}
				<View style={styles.subtituloContainer}>
					<Text style={styles.subtituloPart1}>{t("ou")} </Text>
					<Pressable onPress={() => navigation.navigate("login")}>
						<Text style={[styles.link, styles.subtituloPart2]}>
							{t("Entrar")}
						</Text>
					</Pressable>
					<Text style={styles.subtituloPart3}>
						{t("no Eco pontos")}
					</Text>
				</View>

				{/* Inputs de texto com rótulo para nome, email e senha */}
				<TxtInputWithLabel label={t("Nome")} />
				<TxtInputWithLabel label={t("Email")} />
				<TxtInputWithLabel label={t("Senha")} secureTextEntry />

				{/* Checkbox para concordar com os termos de uso */}
				<CheckboxComponent label={t("Concordo com os termos de uso")} />

				{/* Link para os termos de uso */}
				<View style={styles.forgotPasswordContainer}>
					<Pressable onPress={() => console.log("Termos de uso")}>
						<Text style={styles.link}>{t("Termos de uso")}</Text>
					</Pressable>
				</View>

				{/* Botão de cadastro */}
				<Btn titulo={t("Cadastrar")} />

				{/* StatusBar */}
				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}
