import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const teamMembers = [
  {
    id: "1",
    name:  "Manga Vishwasri",
    role: "CEO & Founder",
    details:
      "Manga Vishwasri is the Founder and CEO of Vishwasri Technologies, leading the company with a vision for innovation and digital transformation. With a strong commitment to technology and business growth, she drives the development of cutting-edge solutions that empower businesses worldwide.",
    category: "Leadership",
  },
  {
    id: "2",
    name: "Nallapu Swapna",
    role: "Director",
    details:
      "Nallapu Swapna is a visionary leader focusing on strategic planning and company growth. Her expertise in technology management ensures smooth project execution.",
    category: "Leadership",
  },
  {
    id: "3",
    name: "Madathalapati Suman",
    role: "Director",
    details:
      "Madathalapati Suman plays a key role in business expansion and innovation. With a background in software architecture, he leads teams to success.",
    category: "Leadership",
  },
  {
    id: "4",
    name: "Chandra Shekar",
    role: "Software Developer",
    details:
      "Chandra Shekar is a skilled software developer with expertise in full-stack development, focusing on creating scalable applications.",
    category: "Experts & Innovators",
  },
  {
    id: "5",
    name: "Himabindu",
    role: "UI/UX Designer",
    details:
      "Himabindu specializes in designing intuitive and user-friendly interfaces, enhancing user experiences through innovative design strategies.",
    category: "Experts & Innovators",
  },
  {
    id: "6",
    name: "Sharvani",
    role: "Software Developer",
    details:
      "Sharvani is an expert in backend development, ensuring the performance and security of applications.",
    category: "Experts & Innovators",
  },
  {
    id: "7",
    name: "Akshaya",
    role: "Software Developer",
    details:
      "Akshaya is a talented software developer with expertise in mobile app development, creating seamless user experiences.",
    category: "Experts & Innovators",
  },
  {
    id: "8",
    name: "Prashanthi",
    role: "Software Developer",
    details:
      "Prashanthi focuses on front-end development, delivering highly responsive and engaging user interfaces.",
    category: "Experts & Innovators",
  },
  {
    id: "9",
    name: "Naveen",
    role: "Software Developer",
    details:
      "Naveen specializes in database management and backend systems, ensuring data security and scalability.",
    category: "Experts & Innovators",
  },
  {
    id: "10",
    name: "Ashwith",
    role: "Software Developer",
    details:
      "Ashwith is passionate about cloud computing and DevOps, optimizing deployment and infrastructure automation.",
    category: "Experts & Innovators",
  },
];



export default function Meet() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Meet our Team</Text>
      <Text style={styles.subHeading}>
        Behind every successful project is a team of passionate problem-solvers, developers, and designers who believe in the power of technology.
      </Text>
      <Text style={styles.sectionTitle}>The Future of Tech, Powered by People</Text>

      <Text style={styles.categoryTitle}>Our Leadership</Text>
      {teamMembers
        .filter((member) => member.category === "Leadership")
        .map((member) => (
          <View key={member.id}>
            <TouchableOpacity style={styles.card} onPress={() => toggleExpand(member.id)}>
              <Text style={styles.name}>{member.name}</Text>
              <Text style={styles.role}>{member.role}</Text>
            </TouchableOpacity>
            {expandedId === member.id && (
              <View style={styles.detailsBox}>
                <Text style={styles.details}>{member.details}</Text>
              </View>
            )}
          </View>
        ))}

      <Text style={styles.categoryTitle}>Our Experts & Innovators</Text>
      {teamMembers
        .filter((member) => member.category === "Experts & Innovators")
        .map((member) => (
          <View key={member.id}>
            <TouchableOpacity style={styles.card} onPress={() => toggleExpand(member.id)}>
              <Text style={styles.name}>{member.name}</Text>
              <Text style={styles.role}>{member.role}</Text>
            </TouchableOpacity>
            {expandedId === member.id && (
              <View style={styles.detailsBox}>
                <Text style={styles.details}>{member.details}</Text>
              </View>
            )}
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: hp("1%"),
  },
  subHeading: {
    fontSize: wp("4%"),
    textAlign: "center",
    marginBottom: hp("3%"),
    color: "#333",
  },
  sectionTitle: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: hp("2%"),
  },
  categoryTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: wp("4%"),
    marginBottom: hp("1%"),
    borderRadius: wp("2%"),
    borderWidth: 1,
    borderColor: "#ccc",
  },
  name: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
  },
  role: {
    fontSize: wp("3.5%"),
    color: "#555",
  },
  detailsBox: {
    backgroundColor: "#eef2f3",
    padding: wp("4%"),
    marginBottom: hp("1%"),
    borderRadius: wp("2%"),
    borderWidth: 1,
    borderColor: "#ddd",
  },
  details: {
    fontSize: wp("3.8%"),
    color: "#333",
  },
});
