// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from "react-native";

// export default function SignUpScreen() {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Sign Up</Text>
//           <Text style={styles.headerSubtitle}>
//             Join us today and turn your vision into reality.
//           </Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={{ fontWeight: "bold" }}>First Name</Text>
//           <TextInput style={styles.input} placeholderTextColor="#888" />
//           <Text style={{ fontWeight: "bold" }}>Last Name</Text>
//           <TextInput style={styles.input} placeholderTextColor="#888" />
//           <Text style={{ fontWeight: "bold" }}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholderTextColor="#888"
//             keyboardType="email-address"
//           />
//           <Text style={{ fontWeight: "bold" }}>Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholderTextColor="#888"
//             secureTextEntry={true}
//           />
//           <Text style={{ fontWeight: "bold" }}>Confirm Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholderTextColor="#888"
//             secureTextEntry={true}
//           />

//           <TouchableOpacity style={styles.submitButton}>
//             <Text style={styles.submitButtonText}>Submit</Text>
//           </TouchableOpacity>

//           <Text style={styles.footerText}>
//             Already have an account?{" "}
//             <Text
//               style={styles.loginLink}
//               onPress={() => alert("Login navigation here")}
//             >
//               login here
//             </Text>
//           </Text>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
 
//     backgroundColor: "#ffffff",

//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   header: {
//     backgroundColor: "#4688F1",
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     alignItems: "center",
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   headerSubtitle: {
//     color: "#FFFFFF",
//     marginTop: 8,
//     textAlign: "center",
//     fontSize: 14,
//   },
//   formContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   input: {
//     backgroundColor: "#FFFFFF",
//     borderColor: "#CCCCCC",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     marginVertical: 8,
//     color: "#000",
//   },

//   submitButton: {
//     backgroundColor: "#4688F1",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 16,
//   },
//   submitButtonText: {
   
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   footerText: {
//     marginTop: 20,
//     textAlign: "center",
//     color: "#333333",
//     fontSize: 14,
//   },
//   loginLink: {
//     color: "#3366FF",
//     fontWeight: "bold",
//   },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-dimensions';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignUp = () => {
    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    let hasError = false;

    if (!firstNameRegex.test(firstName)) {
      setFirstNameError('First name should contain only letters');
      hasError = true;
    } else {
      setFirstNameError('');
    }

    if (!lastNameRegex.test(lastName)) {
      setLastNameError('Last name should contain only letters');
      hasError = true;
    } else {
      setLastNameError('');
    }

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('Password should contain at least 8 characters, one uppercase letter, one lowercase letter and one number');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Password and confirm password do not match');
      hasError = true;
    } else {
      setConfirmPasswordError('');
    }

    if (!hasError) {
      // Call API to sign up
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
        <Text style={styles.subHeaderText}>Join us today and turn your vision into reality.</Text>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        {firstNameError && <Text style={styles.error}>{firstNameError}</Text>}

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        {lastNameError && <Text style={styles.error}>{lastNameError}</Text>}

        <Text style={styles.label}>Email/ Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {emailError && <Text style={styles.error}>{emailError}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {confirmPasswordError && <Text style={styles.error}>{confirmPasswordError}</Text>}

        {/* Signup Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('LoginUpScreen')}>
          <Text style={styles.signUpButtonText}>SignUp</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginUpScreen')}>
            login here
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#4688F1',
    paddingVertical: "3%",
    borderBottomLeftRadius: width * 0.15, // Responsive radius
    borderBottomRightRadius: width * 0.15, // Responsive radius
  },
  headerText: {
    fontSize: width * 0.07, // Responsive font size
    fontWeight: 'bold',
    color: '#000',
  },
  subHeaderText: {
    fontSize: width * 0.035, // Responsive font size
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
  form: {
    marginTop: 20,
    paddingHorizontal: width * 0.05, // Responsive padding
  },
  label: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: width * 0.04, // Responsive font size
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signUpButton: {
    backgroundColor: '#4688F1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: width * 0.04, // Responsive font size
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: width * 0.035, // Responsive font size
    color: '#555',
  },
  loginLink: {
    color: '#4688F1',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default SignUpScreen;

