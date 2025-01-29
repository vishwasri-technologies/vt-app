import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importing icons
import image1 from "../Images/image1.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity onPress={() => alert("Notifications clicked!")}>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* IMAGE SECTION */}
      <View>
        <Image source={image1} style={styles.image} />
        <Text style={styles.main1} t>
          Empowering The Businesses Through The Technology
        </Text>
      </View>

   
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: hp("5%"),
    left: wp("5%"),
    right: wp("5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10, // Ensures it's above the image
  },
  image: {
    width: wp("100%"),
    height: hp("45%"),
    resizeMode: "cover",
  },
  content: {
    padding: wp("5%"),
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  main1: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    position: "absolute",
    bottom: hp("5%"),
    left: wp("5%"),
    right: wp("5%"),
    zIndex: 10, 
  },
  input: {
    position: "absolute",
    left: wp("20%"),
    width: wp("60%"),
    bottom: hp("-5%"),
    height: hp("6%"),
    backgroundColor: "#f9f9f9",
    borderRadius: 10,

    marginVertical: hp("2%"),
    borderColor: "black",
    borderWidth: 0.25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: hp("2%"),
    paddingVertical: wp("1%"),

    position: "absolute",
    left: wp("20%"),
    width: wp("60%"),
    bottom: hp("-5%"),
    height: hp("6%"),
    backgroundColor: "#f9f9f9",
    borderRadius: 10,

    marginVertical: hp("2%"),
    borderColor: "black",
    borderWidth: 0.25,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default HomeScreen;
