import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import office1 from "../Images/office1.png";
import office2 from "../Images/office2.png";


export default function Aboutus() {
  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.description}>
        Enhancing businesses with efficient and reliable digital solutions.
        Delivering future-ready technology for growth and success.
      </Text>

      <View style={styles.cardContainer}>
        <Image source={office1} style={styles.image} resizeMode="cover" />
        <View style={styles.textOverlay}>
          <Text style={styles.subHeading}>Who We Are</Text>
          <Text style={styles.text}>
            Vishwasri Technologies is a technology-driven company delivering
            innovative and high-performance software solutions to drive digital
            transformation.
          </Text>
        </View>
      </View>

     
      <View style={{ marginTop: hp("18%"), marginBottom: hp("5%") }}>
        <View style={styles.section}>
          <Text style={styles.subHeading}>🎯 Mission</Text>
          <Text style={styles.text}>
            "To empower businesses with smart, scalable, and efficient
            technology solutions, fostering innovation and growth in a rapidly
            evolving digital landscape."
          </Text>
        </View>

     
        <View style={styles.section}>
          <Text style={styles.subHeading}>🌍 Vision</Text>
          <Text style={styles.text}>
            "To be the most trusted software development partner globally,
            revolutionizing industries through technology-driven solutions that
            shape the future."
          </Text>
        </View>
      </View>

  
      <View style={styles.cardContainer}>
        <Image source={office2} style={styles.image} resizeMode="cover" />
        <View style={styles.textOverlay}>
          <Text style={styles.subHeading}>What We Do</Text>
          <Text style={styles.text}>
            Custom Software Development.Web & Mobile App Development.Digital
            Transformation.UI/UX Design and the Development. E-commerce & SaaS
            Solutions.
          </Text>
        </View>
      </View>

      <View style={{ marginTop: hp("20%"), marginBottom: hp("5%") }}>
        <View style={styles.section}>
          <Text style={styles.subHeading}>Why Choose Us?</Text>
          <Text style={styles.text}>
            We provide innovative, scalable, and secure
            technology solutions with a customer-centric and agile approach. Our
            experienced team ensures high-quality development and long-term
            business success.
          </Text>
        </View>
      </View>
      <View>
    
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("5%"),
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: hp("2%"),
    color: "#333",
  },
  description: {
    fontSize: wp("4%"),
    textAlign: "left",
    marginBottom: hp("2%"),
    color: "#333",
  },

  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("5%"),
    position: "relative", // Allows text to overlay image
    zIndex: 1, // Ensure text is above image
  },
  image: {
    width: wp("60%"),
    height: hp("30%"),
    borderRadius: wp("3%"),
    marginLeft: wp("2%"),
    zIndex: 10, // Behind text overlay error line.
    resizeMode: "contain",
  },
  textOverlay: {
    position: "absolute",
    bottom: hp("-20%"),
    right: 0,
    width: wp("65%"),
    backgroundColor: "#fff",
    padding: wp("8%"),
    borderRadius: wp("3%"),
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
   
  },
  subHeading: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#222",
    marginBottom: hp("1%"),
  },
  text: {
    fontSize: wp("4%"),
    color: "#444",
    alignItems: "center",
  },
  section: {
    marginBottom: hp("3%"),
  },
});
