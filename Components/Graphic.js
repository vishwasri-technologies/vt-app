import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import page3 from "../Images/page3.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import callme from "../Images/callme.jpg";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Graphic() {
  const navigation = useNavigation();
   return (
     <ScrollView>
     <View style={styles.container}>
 
       <Image source={page3} style={styles.image} />
       <View style={styles.overlay}>
         <Text style={styles.headerTitle}>Graphic Design</Text>
         <Text style={styles.headerSubtitle}>Transforming Ideas into</Text>
         <Text style={styles.headerSubtitle}>Visual Masterpieces.</Text>
       </View>
 
      
       <View style={styles.not}>
         <Text style={styles.sectionTitle}>Graphic Design Services</Text>
         <View style={styles.textWrapper}>
           {[
        { "title": "UI/UX Design", "desc": "Custom logo designs and complete brand identity solutions for businesses." },
        { "title": "Social Media Graphics", "desc": "Creative visuals for Instagram, Facebook, LinkedIn, and other platforms to boost engagement." },
        { "title": "Marketing Materials", "desc": "High-quality brochures, flyers, business cards, posters, and banners for branding." },
        { "title": "Website & App Graphics", "desc": "UI components, icons, and web graphics designed for a seamless digital experience." },
        { "title": "Ad Creatives & Marketing Banners", "desc": "High-quality advertisements, billboards, and digital marketing creatives." },
        { "title": "Presentation Design", "desc": "Visually compelling business reports and marketing infographics." },
           ].map((item, index) => (
             <Text key={index} style={styles.point}>
               <Text style={styles.boldText}>• {item.title}</Text> – {item.desc}
             </Text>
           ))}
         </View>
       </View>
 
       <View style={styles.contactSection}>
         <Image source={callme} style={styles.call} />
         <View style={styles.contactTextWrapper}>
           <Text style={styles.contactTitle}>Need Stunning Designs for Your Brand?</Text>
           <Text style={styles.contactSubtitle}>
           Get creative, high-quality graphics that make an impact.
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

