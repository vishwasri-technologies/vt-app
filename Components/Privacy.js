import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Privacy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Privacy and Security</Text>
      <Text style={styles.paragraph}>
        At Vishwasri Technologies, we are committed to safeguarding your privacy
        and ensuring the security of your data. Our practices are guided by
        global data protection standards to ensure your information is handled
        responsibly and transparently. Below is a detailed overview of our
        privacy and security measures.
      </Text>
      <Text style={styles.sectionTitle}>Data Collection</Text>
      <Text style={styles.paragraph}>
        &#8226; Personal Information: We collect your name, email address, phone
        number, and other necessary contact details to provide our services.
      </Text>
      <Text style={styles.paragraph}>
        &#8226; Company Information: For corporate clients, we gather additional
        details like company name, industry, and relevant project information.
      </Text>
      <Text style={styles.paragraph}>
        &#8226; Project Data: Specific details about your project requirements
        and preferences are collected to tailor our solutions effectively.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Technical Data: We use cookies and analytics tools to collect data such
        as IP addresses, browser types, and device information to optimize your
        user experience.
      </Text>

      <Text style={styles.sectionTitle}>Data Usage</Text>
      <Text style={styles.paragraph}>
      &#8226; Service Delivery: Your information helps us provide and execute services
        efficiently.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Customer Support: We use your contact information to assist with
        inquiries and resolve issues promptly.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Improvement and Optimization: Technical data is analyzed to enhance the
        performance and functionality of our platforms.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Communication: We use your details to send updates, offers, and
        notifications relevant to your engagements.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Compliance: Collected data is used to meet legal and regulatory
        requirements when applicable.
      </Text>

      <Text style={styles.sectionTitle}>User Rights</Text>
      <Text style={styles.paragraph}>
      &#8226; Access: You have the right to view the information we hold about you.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Update: You can request updates or corrections to your personal data.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Delete: You may request the permanent deletion of your data, subject to
        legal and contractual obligations.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Withdraw Consent: You can withdraw your consent for data processing at
        any time.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Data Portability: You may request your data in a transferable format for
        use with another provider.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Report Concerns: If you suspect misuse, you can report it to our privacy
        team at privacy@vishcom.net
      </Text>

      <Text style={styles.sectionTitle}>Data Retention</Text>

      <Text style={styles.paragraph}>
      &#8226; Retention Period: We keep your data only for as long as it is needed to
        fulfill the purposes for which it was collected.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Deletion: Once no longer required, your data is securely deleted or
        anonymized to prevent unauthorized access or misuse.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Retention Policies: Retention is guided by legal, contractual, and
        operational requirements.
      </Text>

      <Text style={styles.sectionTitle}>Breach Response</Text>
      <Text style={styles.paragraph}>
      &#8226; Incident Management: In the event of a breach, we promptly identify and
        contain the issue to minimize its impact.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Notifications: Affected users and authorities are notified within the
        required timeframe, if applicable.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Corrective Measures: We implement actions to address vulnerabilities and
        prevent future breaches.
      </Text>
      <Text style={styles.paragraph}>
      &#8226; Transparency: We maintain open communication with affected parties
        throughout the resolution process.
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

export default Privacy;
