import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import page4 from "../Images/page4.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import coolcall from "../Images/coolcall.jpg";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function Digital() {
const navigation = useNavigation();
   return (
     <ScrollView>
     <View style={styles.container}>
 
       <Image source={page4} style={styles.image} />
       <View style={styles.overlay}>
         <Text style={styles.headerTitle}>Digital Marketing</Text>
         <Text style={styles.headerSubtitle}>Helping Your Business</Text>
         <Text style={styles.headerSubtitle}>Grow Faster.</Text>
       </View>
 
      
       <View style={styles.not}>
         <Text style={styles.sectionTitle}>Digital Marketing Services</Text>
         <View style={styles.textWrapper}>
           {[
    { "title": "Search Engine Optimization", "desc": "Improve website ranking, drive organic traffic, and enhance online visibility." },
    { "title": "Social Media Marketing", "desc": "Grow your brand on Facebook, Instagram, LinkedIn, Twitter, etc." },
    { "title": "Content Marketing", "desc": "Create engaging blogs, website content, and copywriting to attract and retain customers." },
    { "title": "Email Marketing", "desc": "Personalized email campaigns and automated workflows to boost conversions." },
    { "title": "Video & YouTube Marketing", "desc": "High-quality promotional videos, YouTube Ads, and video content strategies." },
    { "title": "Branding & Digital Strategy", "desc": "Custom marketing plans to align with your business goals." }
].map((item, index) => (
             <Text key={index} style={styles.point}>
               <Text style={styles.boldText}>• {item.title}</Text> – {item.desc}
             </Text>
           ))}
         </View>
       </View>
 
       <View style={styles.contactSection}>
         <Image source={coolcall} style={styles.call} />
         <View style={styles.contactTextWrapper}>
           <Text style={styles.contactTitle}>Want to Grow Your Business Online?</Text>
           <Text style={styles.contactSubtitle}>
           Boost your brand visibility with our expert marketing strategies.
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

