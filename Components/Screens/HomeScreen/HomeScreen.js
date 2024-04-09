import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { useStyleHomeScreen } from "./useStyleHomeScreen"; // Importando estilos customizados
import { ParagrafoH1 } from "../../ComponentsImports"; // Importando componente ParagrafoH1
import CuponComponent from "../../CuponComponent"; // Importando componente CuponComponent
import NavbarComponent from "../../NavbarComponent"; // Importando componente NavbarComponent
import "../../../.expo/utils/i18n"; // Importando configurações de internacionalização
import { useTranslation } from "react-i18next"; // Importando hook de tradução

export default function HomeScreen({ route }) {
	const styles = useStyleHomeScreen(); // Obtendo estilos usando o hook useStyleHomeScreen
	const { t } = useTranslation(); // Obtendo a função de tradução
	const { nome } = route.params; // Obtendo o nome do usuário passado como parâmetro na navegação
	// Definindo uma lista de cupons com informações fictícias
	const cupons = [
		{
			source: require("../../../assets/burguerKing.png"),
			titulo: "Burguer King",
			conteudo: t("R$25 ou 10% de desconto em qualquer ponto"),
			pontos: "120",
		},
		{
			source: require("../../../assets/magalu.png"),
			titulo: "Magalu",
			conteudo: t("R$50 ou 15% de desconto em qualquer ponto"),
			pontos: "200",
		},
		{
			source: require("../../../assets/ipiranga.png"),
			titulo: "Posto Ipiranga",
			conteudo: t("R$30 ou 15% de desconto em qualquer ponto"),
			pontos: "150",
		},
		{
			source: require("../../../assets/ipiranga.png"),
			titulo: "Posto Ipiranga",
			conteudo: t("R$30 ou 15% de desconto em qualquer ponto"),
			pontos: "150",
		},
	];

	return (
		<View>
			{/* Utilizando um ScrollView para permitir a rolagem da tela */}
			<ScrollView>
				<View style={styles.container}>
					{/* Seção superior da tela */}
					<View style={styles.containerTop}>
						{/* Componente ParagrafoH1 para o título de boas-vindas */}
						<ParagrafoH1
							conteudo={t("Bem vindo") + " " + nome + "!"}
						/>
						{/* Container para os pontos disponíveis */}
						<View style={styles.containerPontos}>
							<Text style={styles.pontostxt}>310</Text>
							<Text style={styles.span}>
								{t("Pontos disponíveis")}
							</Text>
						</View>
					</View>
					{/* Exibição da imagem do perfil */}
					<View>
						<Image
							style={styles.Perfilimg}
							source={require("../../../assets/Perfilicon.png")}
						/>
					</View>
					{/* Seção de exibição dos cupons */}
					<View style={styles.sectionCupons}>
						{/* Elemento decorativo (curva) */}
						<View style={styles.curve}></View>
						{/* Subtítulo para a seção de cupons */}
						<Text style={styles.subtitulo}>
							{t("Recomendado para você")}
						</Text>
						{/* Mapeando e renderizando cada cupom na lista de cupons */}
						{cupons.map((cupon, index) => (
							<CuponComponent
								key={index}
								source={cupon.source}
								titulo={cupon.titulo}
								conteudo={cupon.conteudo}
								pontos={cupon.pontos}
								pontosTXT={t("Pontos")}
							/>
						))}
					</View>
				</View>
			</ScrollView>
			{/* Componente de barra de navegação */}
			<NavbarComponent />
		</View>
	);
}
