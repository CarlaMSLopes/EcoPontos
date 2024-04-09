import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { useStylesWelcomeScreen } from "./stylesWelcomeScreen";
import { Logo, ParagrafoH1 } from "../../ComponentsImports"; // Importando componentes
import "../../../.expo/utils/i18n"; // Importando configurações de internacionalização
import { useTranslation } from "react-i18next"; // Importando hook de tradução
import { Picker } from "@react-native-picker/picker"; // Importando componente Picker

// Componente principal que renderiza a tela de boas-vindas
export default function WelcomeScreen({ navigation }) {
	// Estado para armazenar o idioma selecionado
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	// Hook de tradução
	const { t, i18n } = useTranslation();
	// Obtendo estilos usando a função useStyles
	const styles = useStylesWelcomeScreen();

	// Função para lidar com a mudança de idioma
	const handleLanguageChange = (value) => {
		setSelectedLanguage(value);
		i18n.changeLanguage(value)
			.then(() => {
				console.log("Linguagem alterada para:", value);
			})
			.catch((err) => {
				console.log("Erro ao alterar a linguagem:", err);
			});
	};

	// Função para lidar com o pressionar do botão "Sobre nós"
	const handleAboutPress = () => {
		navigation.navigate("About");
	};

	// Função para lidar com o pressionar do botão "Próximo"
	const handleNextPress = () => {
		navigation.navigate("Intro");
	};

	// Renderização do componente
	return (
		<View style={styles.container}>
			{/* Componente Picker para selecionar idioma */}
			<Picker
				style={styles.changeLanguageContainer}
				selectedValue={selectedLanguage}
				onValueChange={(itemValue) => handleLanguageChange(itemValue)}
			>
				<Picker.Item label="Português Brasil" value="pt" />
				<Picker.Item label="Inglês" value="en" />
			</Picker>
			{/* Componente de logo */}
			<Logo />
			{/* Container para o título e o link "Sobre nós" */}
			<View style={styles.contentContainer}>
				{/* Componente ParagrafoH1 para o título */}
				<ParagrafoH1 conteudo={t("Bem vindo ao EcoPontos!")} />
				{/* Componente Pressable para o link "Sobre nós" */}
				<Pressable style={styles.link} onPress={handleAboutPress}>
					{/* Texto "Sobre nós" */}
					<Text style={[styles.texto, styles.linktxt]}>
						{t("Sobre nós")}
					</Text>
				</Pressable>
			</View>
			{/* Botão "Próximo" */}
			<Pressable style={styles.button} onPress={handleNextPress}>
				{/* Texto do botão "Próximo" */}
				<Text style={styles.buttonText}>{t("Próximo")}</Text>
			</Pressable>
			{/* StatusBar */}
			<StatusBar style="auto" />
		</View>
	);
}
