import LoginScreen from "./Components/Screens/LoginScreen";
import AboutScreen from "./Components/Screens/AboutScreen";
import IntroScreen from "./Components/Screens/IntroScreen";
import WelcomeScreen from "./Components/Screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Intro" component={IntroScreen} />
				<Stack.Screen name="login" component={LoginScreen} />
				<Stack.Screen name="About" component={AboutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
