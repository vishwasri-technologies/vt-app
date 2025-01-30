
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "./Components/HomeScreen";
import WelcomeScreen from "./Components/WelcomeScreen";
import SignUpScreen from "./Components/SignUpScreen";
import LoginUpScreen from "./Components/LoginUpScreen";
import OnboardingScreen from "./Components/OnboardingScreen";
import ForgotScreen from "./Components/ForgotScreen";
import BottomScreen from "./navigation/BottomScreen"; // Corrected import path
import EditProfileScreen from "./Components/EditProfileScreen"; // Added import
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginUpScreen" component={LoginUpScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen name="BottomScreen" component={BottomScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} /> 

        
        {/* <Stack.Screen name="HomeScreen" component={BottomScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
