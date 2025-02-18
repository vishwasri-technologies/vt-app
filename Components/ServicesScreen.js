import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import service from "../Images/service.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import computer from "../Images/computer.png";
import setting from "../Images/setting.png";
import computer1 from "../Images/computer1.png";
import universe from "../Images/universe.png";
import Web from "./Web";
import Newapp from "./Newapp";
import Graphic from "./Graphic";
import Digital from "./Digital";


const details = [
  {
    id: "1",
    head: "Website Development",
    subhead: "Professional coded website development",
    important:
      "We specialize in creating responsive, user-friendly websites tailored to meet your business goals. From sleek designs to seamless functionality, our solutions ensure your website stands out in a competitive digital landscape. Whether you need an e-commerce platform, portfolio site, or corporate website, we deliver performance-driven results. Trust us to build the online foundation for your success.",
    image: computer,
    screenName:Web
  },
  {
    id: "2",
    head: "App Development",
    subhead: "High-performance mobile applications",
    important:
      "Bring your ideas to life with our innovative app development services. We design and develop intuitive, feature-rich mobile applications for iOS and Android platforms. Focusing on user experience and scalability, our apps are crafted to enhance engagement and streamline processes. Whether it’s a startup or an enterprise-level solution, we create apps that deliver real value.",
    image: setting,
    screenName:Newapp
  },
  {
    id: "3",
    head: "Graphic Design",
    subhead: "Transforming Ideas into Visual Masterpieces",
    important:
      "Your brand deserves to shine with stunning visuals that leave a lasting impression. Our graphic design services include logo creation and more, all customized to reflect your unique identity. We combine creativity and strategy to craft designs that resonate with your audience. Let us help you tell your story through impactful and memorable visuals.",
    image: computer1,
    screenName:Graphic
  },
  {
    id: "4",
    head: "Digital Marketing",
    subhead: "Helping Your Business Grow Faster",
    important:
      "Grow your online presence and reach your target audience with our comprehensive digital marketing strategies. From search engine optimization (SEO) to social media campaigns, we deliver data-driven solutions to boost your brand visibility. Our team focuses on creating measurable marketing efforts that drive traffic, leads, and conversions. Partner with us to unlock your brand’s full digital potential.",
    image: universe,
    screenName:Digital
  },
];

export default function ServicesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Image source={service} style={styles.banner} />
            <Text style={styles.title}>Our Services</Text>
          </>
        )}
        data={details}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.headerSection}>
              <Image source={item.image} style={styles.icon} />
              <View>
                <Text style={styles.head}>{item.head}</Text>
                <Text style={styles.subhead}>{item.subhead}</Text>
              </View>
            </View>
            <Text style={styles.description}>{item.important}</Text>
        <TouchableOpacity style={styles.button}    onPress={() => navigation.navigate(item.screenName)} >
                   <Text style={styles.buttonText}>Learn More</Text>
                 </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  banner: {
    width: wp(100),
    height: hp(30),
    resizeMode: "cover",
  
  },
  title: {
    marginTop: hp(-10),
    textAlign: "center",
    color: "white",
    fontSize: wp(7),
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    margin: wp(5),
    borderRadius: 10,
  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    padding: wp(5),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    width: wp(10),
    height: wp(10),
    resizeMode: "contain",
    marginRight: wp(3),
  },
  head: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "white",
  },
  subhead: {
    fontSize: wp(3.5),
    color: "white",
  },
  description: {
    paddingVertical: hp(2),
    paddingLeft: wp(5),
  
    fontSize: wp(3.5),
    textAlign: "left",
    paddingHorizontal: wp(2),
    justifyContent:"justify",
    marginTop: hp(1),
  },
  learnMore: {
    fontSize: wp(4),
    color: "#007bff",
    marginTop: hp(1),
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
    marginHorizontal: wp("28%"),
    marginVertical: hp("2%"),
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});
