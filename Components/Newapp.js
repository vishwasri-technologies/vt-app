import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import page2 from "../Images/page2.jpg";
import callto from "../Images/callto.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Newapp() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>

        <Image source={page2} style={styles.banner} />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>App Development</Text>
          <Text style={styles.bannerSubtitle}>High performance mobile</Text>
          <Text style={styles.bannerSubtitle}>applications</Text>
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.servicesHeading}>App Development Services</Text>
          <View style={styles.servicesList}>
            {[
              { title: "iOS & Android App Development", desc: "High-performance native apps built for smooth user experience and optimal functionality." },
              { title: "Cross-Platform Apps", desc: "Scalable apps developed using Flutter, React Native, and other cross-platform technologies." },
              { title: "UI/UX Design for Apps", desc: "Intuitive and engaging app designs to enhance user experience and engagement." },
              { title: "Backend & API Integration", desc: "Secure and efficient backend services for seamless app performance." },
              { title: "App Performance Optimization", desc: "Ensuring high speed, security, and efficiency for smooth functionality." },
              { title: "App Maintenance & Support", desc: "Regular updates, bug fixes, and feature enhancements." },
            ].map((item, index) => (
              <Text key={index} style={styles.serviceItem}>
                <Text style={styles.serviceTitle}>• {item.title}</Text> – {item.desc}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.contactContainer}>
          <Image source={callto} style={styles.contactIcon} />
          <View style={styles.contactDetails}>
            <Text style={styles.contactHeader}>Ready to Build Your App?</Text>
            <Text style={styles.contactDescription}>
            Get in touch with us to discuss your app development needs.
            </Text>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Call us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  banner: {
    width: wp("100%"),
    height: hp("25%"),
    resizeMode: "cover",
  },
  bannerOverlay: {
    position: "absolute",
    top: hp("6%"),
    left: wp("3%"),
    padding: wp("2%"),
    borderRadius: 5,
  },
  bannerTitle: {
    fontSize: wp("5%"),
    color: "#F7F7F7",
    fontWeight: "bold",
  },
  bannerSubtitle: {
    color: "#F7F7F7",
    fontSize: wp("4%"),
  },
  servicesSection: {
    marginVertical: wp("0.5%"),
    marginHorizontal: wp("4%"),
  },
  servicesHeading: {
    fontSize: wp("4.8%"),
    color: "black",
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  servicesList: {
    width: wp("92%"),
  },
  serviceItem: {
    fontSize: wp("4%"),
    color: "black",
    flexWrap: "wrap",
    marginBottom: hp("1%"),
  },
  serviceTitle: {
    fontWeight: "bold",
    color: "black",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("92%"),
    alignSelf: "center",
  },
  contactIcon: {
    width: wp("28%"),
    height: wp("28%"),
    resizeMode: "contain",
    marginRight: wp("4%"),
  },
  contactDetails: {
    flex: 1,
  },
  contactHeader: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
  contactDescription: {
    fontSize: wp("4%"),
    marginTop: hp("0.5%"),
  },
  contactButton: {
    marginTop: hp("1.5%"),
    backgroundColor: "#4a90e2",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  contactButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});
