import React from "react";
import { View, Text, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Logo, ParagrafoH1 } from "../../ComponentsImports"; // Importa componentes de outros arquivos
import "../../../.expo/utils/i18n"; // Importa o utilitário de internacionalização
import { useTranslation } from "react-i18next"; // Importa o hook de tradução
import { useStyleIntroScreen } from "./useStylesIntroScreen"; // Importa o hook de estilos

const IntroScreen = ({ navigation }) => {
	const styles = useStyleIntroScreen(); // Utiliza o hook de estilos
	const { t } = useTranslation(); // Usa o hook de tradução para obter traduções
	const slides = [
		{
			key: 1,
			title: "slide 1",
			text: t("EcoPontos é um aplicativo de pontos de reciclagem."), // Obtém tradução para o texto do slide
		},
		{
			key: 2,
			title: "slide 2",
			text: t(
				"Você entrega materiais nos pontos de coleta em Recife e junta pontos em troca de benefícios, descontos e muito mais!"
			), // Obtém tradução para o texto do slide
		},
		{
			key: 3,
			title: "slide 3",
			text: t("Essa é sua primeira vez? Vamos começar!"), // Obtém tradução para o texto do slide
		},
	];

	// Funções para renderizar os botões
	const renderNextButton = () => (
		<View style={[styles.button, styles.buttonLandscape]}>
			<Text style={styles.text}>{t("Próximo")}</Text> // Traduz o texto do
			botão
		</View>
	);

	const renderSkipButton = () => (
		<View
			style={[styles.button, styles.buttonSkip, styles.buttonLandscape]}
		>
			<Text style={styles.text}>{t("Pular")}</Text> // Traduz o texto do
			botão
		</View>
	);

	const renderItem = ({ item }) => (
		<View style={styles.container}>
			<Logo /> // Componente de logotipo
			<ParagrafoH1 conteudo={item.text} /> // Componente de parágrafo com
			o texto do slide
		</View>
	);

	return (
		<AppIntroSlider
			renderItem={renderItem}
			data={slides}
			activeDotStyle={{ backgroundColor: "#87A922" }}
			bottomButton // Define que os botões ficarão na parte inferior
			showSkipButton // Define que o botão "Pular" será exibido
			renderNextButton={renderNextButton}
			renderSkipButton={renderSkipButton}
			renderDoneButton={() => (
				<Pressable
					style={[styles.button, styles.buttonStart]}
					onPress={() => navigation.navigate("login")} // Navega para a tela de login quando o botão "Começar" é pressionado
				>
					<Text style={styles.text}>{t("Começar")}</Text> // Traduz o
					texto do botão
				</Pressable>
			)}
		/>
	);
};

export default IntroScreen;
