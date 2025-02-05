import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Components/HomeScreen";
import PortfolioScreen from "../Components/PortfolioScreen";
import ServicesScreen from "../Components/ServicesScreen";
import ProfileScreen from "../Components/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Portfolio")
            iconName = focused ? "briefcase" : "briefcase-outline";
          else if (route.name === "Services")
            iconName = focused ? "desktop" : "desktop-outline";
          else if (route.name === "Profile")
            iconName = focused ? "person-circle" : "person-circle-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
          
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: "white",
          borderTopWidth: 0.5,
          borderTopColor: "#ddd",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
