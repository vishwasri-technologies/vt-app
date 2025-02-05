import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Help = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Help and Support</Text>
      <Text style={styles.paragraph}>
        We are committed to efficient support to ensure your experience is as
        smooth and seamless as possible. Whether you have questions, technical
        concerns, or need assistance with our services, our team is here to help
        and provide effective solutions tailored to your needs
      </Text>
      <Text style={styles.sectionTitle}>Support Channels</Text>
      <Text style={styles.paragraph}>
        You can reach our support team through the following channels:
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Email: Write to us at support vishwasritechnologies@vishcom.net for
        detailed assistance.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Phone: Call us directly at +91-9908208857 during business hours for
        immediate help.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Online Portal: Submit a ticket through our Help and Support Portal,
        where you can describe your issue and track its resolution
      </Text>

      <Text style={styles.sectionTitle}>Knowledge Base</Text>
      <Text style={styles.paragraph}>
        Our 24/7 Knowledge Base provides a wide range of resources to help you
        resolve issues independently. It includes FAQs, tutorials,
        troubleshooting guides, and best practices, ensuring you can quickly
        find answers to common questions.
      </Text>

      <Text style={styles.sectionTitle}>Response Time</Text>
      <Text style={styles.paragraph}>
        We aim to respond to all inquiries within 24 hours on business days. For
        urgent issues, we prioritize requests to ensure minimal disruption to
        your work.
      </Text>

      <Text style={styles.sectionTitle}>Escalation Process</Text>

      <Text style={styles.paragraph}>
        If an issue isn’t resolved to your satisfaction, you can escalate it to
        a senior support team member. Provide relevant details, and we’ll ensure
        your concern is addressed thoroughly and promptly.
      </Text>

      <Text style={styles.sectionTitle}>Feedback</Text>

      <Text style={styles.paragraph}>
        Your feedback is important to us. Share your suggestions or concerns at
        VTfeedback@vishcom.net to help us improve our services.
      </Text>
      <Text style={styles.sectionTitle}>Contact Information</Text>

      <Text style={styles.paragraph}>
        For support, you can contact us through email, phone, or our online
        portal. We are here to make your experience with Vishwasri Technologies
        seamless and stress-free.
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

export default Help;
