import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import page1 from "../Images/page1.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import call from "../Images/call.png";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function Web() {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>

      <Image source={page1} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.headerTitle}>Website Development</Text>
        <Text style={styles.headerSubtitle}>Professional coded website</Text>
        <Text style={styles.headerSubtitle}>development</Text>
      </View>

     
      <View style={styles.not}>
        <Text style={styles.sectionTitle}>Web Development Services</Text>
        <View style={styles.textWrapper}>
          {[
            { title: "Custom Website Development", desc: "Secure, high-performance websites tailored to business needs." },
            { title: "E-commerce Development", desc: "Robust online stores with secure payments, product catalogs, and order tracking." },
            { title: "UI/UX & Frontend Development", desc: "Responsive, visually appealing, and interactive designs for a seamless user experience." },
            { title: "Backend & API Integration", desc: "Secure, fast, and scalable backend solutions with database management." },
            { title: "Website Maintenance & Support", desc: "Regular updates, security patches, and performance improvements." },
            { title: "Cloud & Hosting Solutions", desc: "Reliable deployment on AWS, Azure, and Google Cloud." },
          ].map((item, index) => (
            <Text key={index} style={styles.point}>
              <Text style={styles.boldText}>• {item.title}</Text> – {item.desc}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.contactSection}>
        <Image source={call} style={styles.call} />
        <View style={styles.contactTextWrapper}>
          <Text style={styles.contactTitle}>Ready to Build Your Website?</Text>
          <Text style={styles.contactSubtitle}>
            Get in touch with us to discuss your web development needs.
          </Text>
          <TouchableOpacity style={styles.callButton}  onPress={() => navigation.navigate("Contactus")}>
            <Text style={styles.callButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    width: wp("100%"),
    height: hp("25%"),
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: hp("6%"),
    left: wp("1%"),
  
    padding: wp("2%"),
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: wp("5%"),
    color: "#F7F7F7",
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#F7F7F7",
    fontSize: wp("4%"),
  },
  not: {
    marginVertical:wp("0.5%"),
    marginHorizontal: wp("4%"),

  },
  sectionTitle: {
    fontSize: wp("4.8%"),
    color: "black",
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  textWrapper: {
    width: wp("92%"),
  },
  point: {
    fontSize: wp("4%"),
    color: "black",
    flexWrap: "wrap",
    marginBottom: hp("1%"),
  },
  boldText: {
    fontWeight: "bold",
    color: "black",
  },
  contactSection: {
    flexDirection: "row",
    alignItems: "center",
  
    width: wp("92%"),
    alignSelf: "center",
  },
  call: {

    width: wp("28%"),
    height: wp("28%"),
    resizeMode: "contain",
    marginRight: wp("4%"),
  },
  contactTextWrapper: {
    flex: 1,
  },
  contactTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
  contactSubtitle: {
    fontSize: wp("4%"),
    marginTop: hp("0.5%"),
  },
  callButton: {
    marginTop: hp("1.5%"),
    backgroundColor: "#4a90e2",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  callButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});

