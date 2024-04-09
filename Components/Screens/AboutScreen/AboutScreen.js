import React from "react";
import { Text, View, Pressable } from "react-native";
import { useStylesAboutScreen } from "./stylesAboutScreen";
import { teamMembers } from "./Members";
import { Logo, ExternalLink } from "../../ComponentsImports"; // Importando componentes
import "../../../.expo/utils/i18n"; // Importando configurações de internacionalização
import { useTranslation } from "react-i18next"; // Importando hook de tradução

// Componente principal que renderiza a tela "Sobre"
export default function AboutScreen({ navigation }) {
	// Hook de tradução
	const { t, i18n } = useTranslation();
	// Obtendo estilos usando a função useStyles
	const styles = useStylesAboutScreen();

	// Renderização do componente
	return (
		<View style={styles.container}>
			{/* Logo (visível apenas em telas menores) */}
			<View style={styles.containerLogo}>
				<Logo />
			</View>

			{/* Título da seção de equipe */}
			<Text style={styles.sectionTitle}>{t("Equipe")}</Text>
			{/* Lista de membros da equipe */}
			<View style={styles.teamMembers}>
				{teamMembers.map((member, index) => (
					<Text style={styles.member} key={index}>
						<Text style={styles.span}>{member.name}</Text> –{" "}
						{member.id}
					</Text>
				))}
			</View>
			{/* Link externo para o GitHub */}
			<ExternalLink
				style={styles.linktxt}
				url="https://github.com/CarlaMSLopes/EcoPontos"
			>
				GitHub
			</ExternalLink>
			{/* Botão de voltar */}
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>{t("Voltar")}</Text>
			</Pressable>
		</View>
	);
}
