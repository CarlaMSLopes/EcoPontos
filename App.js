import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen";
import AboutScreen from "./Components/Screens/AboutScreen/AboutScreen";
import IntroScreen from "./Components/Screens/IntroScreen/IntroScreen";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import RegisterScreen from "./Components/Screens/RegisterScreen/RegisterScreen";
import WelcomeScreen from "./Components/Screens/WelcomeScreen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: true, // Habilita os gestos
					gestureDirection: "horizontal", // Define a direção dos gestos
				}}
				initialRouteName="Welcome"
			>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Intro" component={IntroScreen} />
				<Stack.Screen name="login" component={LoginScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="About" component={AboutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
