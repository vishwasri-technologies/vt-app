import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Components/WelcomeScreen";
import SignUpScreen from "./Components/SignUpScreen";
import LoginUpScreen from "./Components/LoginUpScreen";
import OnboardingScreen from "./Components/OnboardingScreen";
import ForgotScreen from "./Components/ForgotScreen";
import BottomScreen from "./navigation/BottomScreen";
import EditProfileScreen from "./Components/EditProfileScreen";
import DrawerNavigator from "./Components/DrawerNavigator";
import Privacy from "./Components/Privacy";
import Help from "./Components/Help";
import Terms from "./Components/Terms";
import Join from "./Components/Join";
import Web from "./Components/Web";
import Newapp from "./Components/Newapp";
import Graphic from "./Components/Graphic";
import Digital from "./Components/Digital";
import ServicesScreen from "./Components/ServicesScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
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
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Join" component={Join} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="Newapp" component={Newapp} />
          <Stack.Screen name="Graphic" component={Graphic} />
          <Stack.Screen name="Digital" component={Digital} />
        <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
