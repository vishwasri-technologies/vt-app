import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ForgotScreen = ({ navigation }) => {

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (!emailOrPhone || !newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://192.168.29.167:5000/ForgotScreen", {
        emailOrPhone,
        newPassword,
        confirmPassword,
      });

      if (response.status === 200) {
        Alert.alert("Success", "Password updated successfully!");
        navigation.navigate("LoginUpScreen");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      Alert.alert("Error", error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerText}>Create new password</Text>
    //     <Text style={styles.subHeader}>Keep it simple.keep it safe.</Text>
    //   </View>

    //   <View style={styles.formContainer}>
    //     <Text style={styles.label}>New Password</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="New Password"
    //       placeholderTextColor="#999"
    //     />

    //     <Text style={styles.label}> ConfirmPassword</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="ConfirmPassword"
    //       placeholderTextColor="#999"
    //       secureTextEntry
    //     />

    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Create new password</Text>
      <Text style={styles.subHeader}>Keep it simple. Keep it safe.</Text>
    </View>

    <View style={styles.formContainer}>


      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}  // Capture user input
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}  // Capture user input
      />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginUpScreen")}
        >
          <Text style={styles.buttonText}>Save Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#4688F1",
    paddingVertical: responsiveHeight(3),
    borderBottomLeftRadius: responsiveWidth(8),
    borderBottomRightRadius: responsiveWidth(8),
    marginBottom: responsiveHeight(2),
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: responsiveHeight(1),
  },
  subHeader: {
    fontSize: responsiveFontSize(2),
   
    color: '#000',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    justifyContent: "center",
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: "600",
    color: "#333",
    marginBottom: responsiveHeight(1),
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: "#007bff",
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  buttonText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: responsiveHeight(2),
  },
  forgotPasswordText: {
    color: "#4688F1",
    fontSize: responsiveFontSize(1.6),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: responsiveHeight(3),
  },
  footerText: {
    fontSize: responsiveFontSize(1.6),
    color: "#666",
  },
  signUp: {
    color: "#4688F1",
    fontSize: responsiveFontSize(1.6),
    fontWeight: "600",
    marginLeft: responsiveWidth(2),
  },
});

export default ForgotScreen;