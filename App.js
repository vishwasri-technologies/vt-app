import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from "./Components/HomeScreen";
import WelcomeScreen from "./Components/WelcomeScreen";
import SignUpScreen from "./Components/SingUpScreen";
import LoginUpScreen from "./Components/LoginUpScreen";
import OnboardingScreen from "./Components/OnboardingScreen";
import ForgotScreen from "./Components/ForgotScreen";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginUpScreen" component={LoginUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
