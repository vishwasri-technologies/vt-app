import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const teamMembers = [
  {
    id: "1",
    name: "Manga Vishwasri",
    role: "CEO & Founder",
    details: (
      <Text >
        Manga Vishwasri is the<Text style={{fontWeight: 'bold'}}> Founder</Text>  and <Text style={{fontWeight: 'bold'}}> CEO</Text>  of Vishwasri Technologies, leading the company with a vision for innovation and digital transformation. With a strong commitment to technology and business growth, she drives the development of cutting-edge solutions that empower businesses worldwide.
      </Text>
    ),
    category: "Leadership",
  },
  {
    id: "2",
    name: "Nallapu Swapna",
    role: "Director",
    details:
      <Text>
        Nallapu Swapna is the <Text style={{fontWeight: 'bold'}}> Director</Text> of Vishwasri Technologies, driving the company's growth, innovation, and strategic vision. With extensive experience in technology and business leadership, she plays a key role in operations, client relations, and digital transformation.
      </Text>,
    category: "Leadership",
  },
  {
    id: "3",
    name: "Madathalapati Suman",
    role: "Director",
    details:
      <Text>Madathalapati Suman is the <Text style={{fontWeight: 'bold'}}> Director</Text>  of Vishwasri Technologies, leading with a focus on innovation, strategy, and business excellence. He plays a key role in technology growth, operations, and client success, ensuring the delivery of high-quality digital solutions.</Text>,
    category: "Leadership",
  },
  {
    id: "4",
    name: "Chandra Shekar",
    role: "Software Developer",
    details:
      <Text>Chandra Shekar is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text> specializing in frontend development with expertise in React, Angular, and JavaScript frameworks. With a keen eye for UI/UX design, he focuses on responsive, and user-friendly web applications. His expertise in modern front-end technologies.</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "5",
    name: "Himabindu",
    role: "UI/UX Designer",
    details:
      <Text>Himabindu is a <Text style={{fontWeight: 'bold'}}> UI/UX Designer</Text> dedicated to crafting visually appealing and user-friendly interfaces. With experience in Figma and front-end frameworks, she ensures smooth and engaging user experiences.</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "6",
    name: "Sharvani",
    role: "Software Developer",
    details:
      <Text>"Sharvani is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text>  specializing in Backend development with expertise in Node.js, Python, and database management. She focuses on building scalable, secure, and high-performance backend systems, ensuring seamless API integration and data processing."</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "7",
    name: "Akshaya",
    role: "Software Developer",
    details:
      <Text>Akshaya is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text> specializing in Backend development with expertise in Java, Spring Boot, and SQL/NoSQL databases. She is passionate about server-side development, API optimization, and performance tuning to enhance application efficiency.</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "8",
    name: "Prashanthi",
    role: "Software Developer",
    details:
      <Text>Prashanthi is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text> specializing in frontend development with expertise in React, Angular, and JavaScript. She focuses on building responsive, user-friendly, and visually appealing interfaces that enhance digital experiences. With expertise in UI/UX principles.</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "9",
    name: "Naveen",
    role: "Software Developer",
    details:
      <Text>Naveen is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text> specializing in full-stack development with expertise in Java, React, and cloud technologies. He is passionate about building scalable and high-performance applications that enhance user experiences.</Text>,
    category: "Experts & Innovators",
  },
  {
    id: "10",
    name: "Ashwith",
    role: "Software Developer",
    details:
      <Text>Ashwith is a <Text style={{fontWeight: 'bold'}}> Software Developer</Text> specializing in Frontend development with expertise in React, Angular, and JavaScript. He is passionate about crafting visually appealing, responsive, and user-friendly applications that enhance digital experiences. With a strong focus on UI/UX design and performance optimization.</Text>,
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
        Behind every successful project is a team of passionate problem-solvers,
        developers, and designers who believe in the power of technology.
      </Text>
      <Text style={styles.sectionTitle}>
        The Future of Tech, Powered by People
      </Text>

      <Text style={styles.categoryTitle}>Our Leadership</Text>
      {teamMembers
        .filter((member) => member.category === "Leadership")
        .map((member) => (
          <View key={member.id}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => toggleExpand(member.id)}
            >
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
            <TouchableOpacity
              style={styles.card}
              onPress={() => toggleExpand(member.id)}
            >
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
