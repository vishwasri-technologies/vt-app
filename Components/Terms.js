import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Terms = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Terms and Policies</Text>
      <Text style={styles.paragraph}>
        Our Terms and Policies ensure a transparent, fair, and secure experience
        for all users.
      </Text>
      <Text style={styles.sectionTitle}>General Terms</Text>
      <Text style={styles.paragraph}>
        By accessing or using our services, you agree to comply with all
        applicable laws, regulations, and the terms outlined in this document.
        Users are required to provide accurate and truthful information when
        engaging with our services and to use our platforms responsibly. Misuse
        or violation of these terms, such as providing false information,
        unauthorized use of content, or engaging in illegal activities, may
        result in immediate termination of services and possible legal action.
        It is your responsibility to ensure that your actions align with the
        agreed terms and conditions.
      </Text>

      <Text style={styles.sectionTitle}>Privacy Commitment</Text>
      <Text style={styles.paragraph}>
        Your privacy is of utmost importance, and we are committed to handling
        your data responsibly. Our comprehensive privacy policy outlines how we
        collect, use, store, and protect your information. Personal data such as
        your name, contact information, and project details is collected only to
        provide and improve our services. We do not sell or share your data with
        unauthorized third parties, and robust security measures are in place to
        safeguard your information. You can access, update, or request deletion
        of your personal data at any time, ensuring your privacy rights are
        upheld.
      </Text>

      <Text style={styles.sectionTitle}>Payment Policies</Text>
      <Text style={styles.paragraph}>
        Payments must be made according to the terms provided in the agreement
        or invoice. Refunds are issued only in specific cases, such as
        non-delivery of services. Late payments may result in additional charges
        or service interruptions. Our payment process is designed to be clear
        and hassle-free.
      </Text>

      <Text style={styles.sectionTitle}>Dispute Resolution</Text>

      <Text style={styles.paragraph}>
        For any disputes, we encourage resolving them through open
        communication. If unresolved, disputes will be handled through
        arbitration in Hyderabad, Telangana, as per local laws. This approach
        ensures a fair and efficient resolution for both parties
      </Text>

      <Text style={styles.sectionTitle}>For More Information</Text>

      <Text style={styles.paragraph}>
        For detailed information about these terms, please refer to the full
        document on our website or contact us directly. We are here to help
        ensure your experience is smooth and straightforward.
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

export default Terms;
