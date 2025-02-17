import { View, Text, StyleSheet,Image,TouchableOpacity,Linking} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
// import vtweb from "../Images/vtweb.png";
// import hospital from "../Images/h1.png";
// import education from "../Images/education.png";
// import jewellery from "../Images/jewellery.png";
import workflow from "./workflowData";

import { Link } from "@react-navigation/native";
// const workflow = [
//   {
//     id: 1,
//     Project: "Vishwasri Technologies",
//     Industry: "Information Technology(IT)",
//     Image: vtweb,
//     Description:
//       "Developed a professional website for Vishwasri Technologies to showcase its software development services. The platform highlights the company’s expertise, providing clear and concise information about the services offered, with a clean and responsive design for an optimal user experience.",
//     Technologies: "React.js, Node.js, Express.js, MongoDB,AWS",
//     Link:"https://vishcom.net/"
//   },
//   {
//     id: 2,
//     Project: "TrustCare",
//     Industry: "Heathcare",
//     Image: hospital,
//     Description:
//       "Developed a seamless and user-friendly hospital appointment booking website for TrustCare. The platform allows patients to schedule appointments with doctors, view available slots, and receive automated confirmations. The website features a responsive design, real-time booking updates, and ensuring a smooth and efficient healthcare experience.",
//     Technologies: "React.js, Node.js, Express.js, MongoDB,AWS",
//     Link:"https://main.d2ye622qrxqigu.amplifyapp.com/"
//   },

//   {
//     id: 3,
//     Project: "SriLaxmiBhagavan",
//     Industry: "E-commerce",
//     Image: jewellery,
//     Description:
//       "Developed a responsive e-commerce website with structured product categories, detailed descriptions, and smooth navigation for an enhanced user experience.Developed a responsive e-commerce website with structured product categories, detailed descriptions, and smooth navigation for an enhanced user experienceanced user experience.",
//     Technologies: "React.js, Node.js, Express.js, MongoDB,AWS",
//     Link:"https://srilaxmibhagavan.vishcom.net/"
//   },
//   {
//     id: 4,
//     Project: "EduNova University",
//     Industry: "Education",
//     Image: education,
//     Description:
//       "Developed a static university website for Edunova, providing essential information about courses, faculty, admissions, and campus facilities. The website features a structured layout, responsive design, and user-friendly navigation, ensuring accessibility for students, faculty, and prospective applicants.",
//     Technologies: "React.js, Node.js, Express.js, MongoDB,AWS",
//     Link:"https://main.d7nvfk98hzreb.amplifyapp.com/"
//   },
// ];
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
    backgroundColor: "#007bff",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
    marginHorizontal: wp("15%"),
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
});


