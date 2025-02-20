import { View, Text, StyleSheet,Image,TouchableOpacity,Linking} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";

import workflow from "./workflowData";

import { Link } from "@react-navigation/native";

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.box}>
      <View>
        <Text style={styles.box1}>Our Portfolio</Text>
        <Text style={styles.box2}>
          Explore the innovative projects we've delivered across industries.
        </Text>
      </View>
      <ScrollView style={styles.container}>
      {workflow.map((project) => (
        <View key={project.id} style={styles.card}>
          <Text ><Text>Project Name :</Text> <Text style={styles.projectName}>{project.Project}</Text></Text>
          <Text style={styles.industry}>Industry Type : {project.Industry}</Text>
          <Image source={project.Image} style={styles.image} />
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>{project.Description}</Text>
          <Text style={styles.techTitle}>Technologies Used:</Text>
          <Text style={styles.technologies}>{project.Technologies}</Text>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(project.Link)}>
            <Text style={styles.buttonText}>View Project </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: wp("5%"),
  },
  box1: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("1.5%"),
    color: "#333",
    textAlign: "left",
  },
  box2: {
 fontSize: wp("3.8%"),
  },
   container: {
    flex: 1,
    padding: wp("5%"),
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
    marginTop: hp("2%"),
    padding: wp("2%"),

  },
  card: {
    backgroundColor: "#fff",
    padding: wp("4%"),
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: hp("2%"),
  },
  projectName: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: "#333",
    marginBottom: hp("1%"),
  },
  industry: {
    fontSize: wp("4%"),
    color: "#333",
    marginBottom: hp("2%"),
  },
  image: {
    width: "100%",
    height: hp("20%"),
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: hp("2%"),
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    marginBottom: hp("1%"),
  },
  description: {
    fontSize: wp("3.8%"),
    color: "#444",
    marginBottom: hp("2%"),
    textAlign: "justify",
   
    lineHeight: wp("4.5%"),
  },
  techTitle: {
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    marginBottom: hp("1%"),
  
  },
  technologies: {
    fontSize: wp("3.8%"),
    color: "#444",
    marginBottom: hp("2%"),
  },
  button: {
    backgroundColor: "white",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
    marginHorizontal: wp("20%"),
    marginVertical: hp("1%"),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4a90e2",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});


