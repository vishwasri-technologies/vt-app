import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Join = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Join our Team</Text>
      <Text style={styles.paragraph}>
        At Vishwasri Technologies, we believe in fostering innovation and
        empowering talent.
      </Text>
      <Text style={styles.sectionTitle}>Why Join Us</Text>
      <Text style={styles.paragraph}>
        At our company, we believe in fostering a culture of collaboration,
        growth, and innovation. Here’s what you can expect:
      </Text>
      <Text style={styles.paragraph}>
        &#8226; A supportive and inclusive work environment where your
        contributions are recognized.
      </Text>
      <Text style={styles.paragraph}>
        &#8226; Opportunities to work on cutting-edge projects and learn from
        industry experts.
      </Text>
      <Text style={styles.paragraph}>
        &#8226; Career growth and professional development through training
        programs, workshops, and mentorship.
      </Text>
      <Text>Competitive salaries and benefits</Text>

      <Text style={styles.sectionTitle}>Career Opportunities</Text>
      <Text style={styles.paragraph}>
        We regularly update our careers page with open positions in various
        domains, including:
      </Text>
      <Text>&#8226; Software Development</Text>
      <Text>&#8226; IT Support and Consultancy</Text>
      <Text>&#8226; Project Management</Text>
      <Text>&#8226; Sales and Marketing</Text>
      <Text style={styles.sectionTitle}>Internship Programs</Text>
      <Text style={styles.paragraph}>
        For students and recent graduates, we offer structured internships that
        provide real-world experience and mentorship from industry experts.
      </Text>

      <Text style={styles.sectionTitle}>How to Apply</Text>

      <Text style={styles.paragraph}>Applying to join our team is simple:</Text>
      <Text>1. Visit our Careers Page to view current openings.</Text>
      <Text>
        2. Submit your resume and a cover letter outlining your skills,
        experience, and why you want to work with us.
      </Text>
      <Text>
        3. If shortlisted, you will be contacted for the next steps, including
        interviews and assessments.
      </Text>

      <Text style={styles.sectionTitle}>Employee Benefits</Text>

      <Text style={styles.paragraph}>
        We value our employees and provide a wide range of benefits, including:
      </Text>
      <Text>&#8226; Comprehensive health insurance and wellness programs.</Text>
      <Text>
        &#8226; Paid time off, including vacation, sick leave, and holidays.
      </Text>
      <Text>
        &#8226; Professional development opportunities to advance your skills.
      </Text>
      <Text>
        &#8226; Team-building activities and social events to foster
        camaraderie.
      </Text>

      <Text style={styles.footer}>
        For support, contact privacy@vishwatech.com
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
    color: "#333",
  },
  paragraph: {
    fontSize: wp("4%"),
    marginBottom: hp("1%"),
    color: "#333",
  },
  footer: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    marginTop: hp("3%"),
    textAlign: "center",
    color: "#007bff",
  },
});

export default Join;
