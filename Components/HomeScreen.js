import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import  { useEffect } from 'react'; 
import { Ionicons } from "@expo/vector-icons";
import image1 from "../Images/image1.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RFPercentage } from "react-native-responsive-fontsize";
import s1 from "../Images/s1.png";
import s2 from "../Images/s2.png";
import s3 from "../Images/s3.png";
import s4 from "../Images/s4.png";
import s5 from "../Images/group.png";
import s6 from "../Images/student1.png";
import s7 from "../Images/student2.png";
import s8 from "../Images/student3.png";
import s9 from "../Images/mobile.png";
import DrawerNavigator from "./DrawerNavigator";

const services = [
  { id: "1", title: "Web Development", image: s4 },
  { id: "2", title: "App Development", image: s2 },
  { id: "3", title: "Marketing", image: s3 },
  { id: "4", title: "Graphic Design", image: s1 },
];

const projects = [
  {
    id: "1",
    title: "EduNova",
    description:
      "A complete education management system designed for institutions to manage courses, student records, fees.",
    image: s6,
  },
  {
    id: "2",
    title: "EternaJewels",
    description:
      "An elegant jewelry shopping platform offering a wide range of collections, personalized recommendations.",
    image: s7,
  },
  {
    id: "3",
    title: "TheraCare",
    description:
      "A physiotherapy consultation app connecting patients with expert therapists, offering appointment booking.",
    image: s8,
  },
];
const openDrawer = createDrawerNavigator();
const HomeScreen = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.navigate("DrawerNavigator");
  }, [navigation]); 


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Notifications clicked!")}>
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.mainText}>
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

      {/* OUR SERVICES SECTION */}
      <View style={styles.servicesHeader}>
        <Text style={styles.servicesTitle}>Our Services</Text>
        <TouchableOpacity onPress={() => alert("Know More clicked!")}>
          <Text style={styles.knowMoreText}>Know more</Text>
        </TouchableOpacity>
      </View>

      {/* HORIZONTAL SERVICE CARDS */}
      <View>
        <FlatList
          data={services}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.servicesList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.serviceCard}>
              <Image source={item.image} style={styles.serviceImage} />
              <Text style={styles.serviceText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.partnerContainer}>
        <Image source={s5} style={styles.partnerImage} />
        <Text style={styles.partnerText}>
          "Elevate Your Business Today! Partner with us for innovative Web and
          App Development solutions tailored to your needs."
        </Text>
      </View>

      <View>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesTitle}>Popular Projects</Text>
        </View>
        <FlatList
          data={projects}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.projectsList}
          renderItem={({ item }) => (
            <View style={styles.projectCard}>
              <Image source={item.image} style={styles.projectImage} />
              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
              <TouchableOpacity
                style={styles.viewProfileButton}
                onPress={() => alert(`Viewing ${item.title} details`)}
              >
                <Text style={styles.viewProfileButtonText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.mm}>
        <View style={styles.mmContent}>
          <View style={styles.imageWrapper}>
            <Image source={s9} style={styles.mmImage} />
          </View>

          <View style={styles.textButtonContainer}>
            <Text style={styles.mmText}>
              "Have a project in mind? Contact us today to discuss your
              requirements. We're here to bring your vision to life!"
            </Text>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => alert("Calling...")}
            >
              <Text style={styles.buttonText}>Call Us</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    zIndex: 10,
  },
  imageContainer: {
    width: wp("100%"),
    height: hp("45%"),
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mainText: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    position: "absolute",
    bottom: hp("6%"),
    left: wp("5%"),
    right: wp("5%"),
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingHorizontal: wp("3%"),
    width: wp("70%"),
    height: hp("6%"),
    alignSelf: "center",
    marginTop: hp("-3%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: RFPercentage(2.2),
    paddingVertical: hp("1%"),
  },
  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("5%"),
    marginTop: hp("2%"),
  },
  servicesTitle: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
  knowMoreText: {
    fontSize: RFPercentage(2),
    color: "#007bff",
  },
  servicesList: {
    paddingLeft: wp("5%"),
    paddingVertical: hp("5%"),
  },
  serviceCard: {
    width: wp("30%"),
    alignItems: "center",
    marginRight: wp("3%"),
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: wp("2%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  serviceImage: {
    width: wp("20%"),
    height: hp("10%"),
    resizeMode: "cover",
    borderRadius: 8,
  },
  serviceText: {
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp("1%"),
  },
  partnerContainer: {
    marginHorizontal: wp("5%"),
    // marginTop: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // marginBottom: hp("0%"),
  },
  partnerImage: {
    width: wp("100%"),
    height: hp("30%"),
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.7,
  },
  partnerText: {
    fontSize: RFPercentage(2.2),
    textAlign: "center",
    color: "black",
    position: "absolute",
    top: hp("12%"),
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: RFPercentage(3),
    paddingHorizontal: wp("5%"),
    fontWeight: "bold",
  },
  partnerButton: {
    marginTop: hp("2%"),
    backgroundColor: "#007bff",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 8,
    alignItems: "center",
  },
  partnerButtonText: {
    color: "#fff",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },

  projectsList: {
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("3%"),
  },

  projectCard: {
    width: wp("80%"),
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: wp("4%"),
    marginRight: wp("5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  projectImage: {
    width: "100%",
    height: hp("20%"),
    borderRadius: 10,
    marginBottom: hp("2%"),
    resizeMode: "contain",
  },

  projectTitle: {
    fontSize: RFPercentage(2.4),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },

  projectDescription: {
    fontSize: RFPercentage(2),
    color: "#666",
    marginBottom: hp("2%"),
  },

  viewProfileButton: {
    backgroundColor: "#007bff",
    paddingVertical: hp("1%"),
    borderRadius: 8,
    alignItems: "center",
  },

  viewProfileButtonText: {
    color: "#fff",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },

  mm: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("32%"),
    marginTop: hp("-5%"),
  },
  mmContent: {
    width: wp("85%"), // Increased width for better utilization
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("7.5%"), // Adjusted for better centering
    marginVertical: hp("5%"),
  },
  textButtonContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between", // Pushes text to top and button to bottom
    paddingVertical: hp("1%"),
  },
  mmText: {
    fontSize: hp("2%"), // Responsive font size
    fontWeight: "bold", // Added bold text
    lineHeight: hp("2.7%"),
    color: "#333",
  },
  customButton: {
    backgroundColor: "#007bff",
    paddingVertical: hp("1.5%"),
    borderRadius: 8,
    width: wp("40%"), // Match image reference width
    alignItems: "center",
    marginTop: hp("2%"),
    // Shadow for better visibility (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Elevation for Android
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: hp("1.8%"),
    fontWeight: "bold", // Bold text for button
    textAlign: "center",
  },
  mmImage: {
    width: wp("30%"),
    height: hp("25%"),
    resizeMode: "contain",
    marginRight: wp("3%"),
    borderRadius: hp("3%"),
  },
});

export default HomeScreen;