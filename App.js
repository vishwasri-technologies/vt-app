import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Components/WelcomeScreen";
import SignUpScreen from "./Components/SignUpScreen";
import LoginUpScreen from "./Components/LoginUpScreen";
import OnboardingScreen from "./Components/OnboardingScreen";
import ForgotScreen from "./Components/ForgotScreen";
import BottomScreen from "./navigation/BottomScreen";
import EditProfileScreen from "./Components/EditProfileScreen";
// import Aboutus from "./Components/Aboutus";
// import Careers from "./Components/Careers";
// import Contactus from "./Components/Contactus";
// import Feedback from "./Components/Feedback";
// import Meet from "./Components/Meet";
// import Notifications from "./Components/Notifications";
import DrawerNavigator from "./Components/DrawerNavigator";
import Aboutus from "./Components/Aboutus";



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
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        {/* <Stack.Screen name="Drawer" component={DrawerNavigator} /> */}
        {/* <Stack.Screen name="Aboutus" component={Aboutus} />
        <Stack.Screen name="Careers" component={Careers} />
        <Stack.Screen name="Contactus" component={Contactus} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Meet" component={Meet} />
        <Stack.Screen name="Notifications" component={Notifications} /> */}
       
       <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
       <Stack.Screen name="Aboutus" component={Aboutus} />
   
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

