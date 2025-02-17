
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

const LoginUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.subHeader}>Login to your account</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email/Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* Forgot Password */}
        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotScreen")}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("BottomScreen")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.signUp}>Sign Up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#4688F1',
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
    justifyContent: 'center',
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: '#333',
    marginBottom: responsiveHeight(1),
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#007bff',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: responsiveHeight(2),
  },
  forgotPasswordText: {
    color: '#4688F1',
    fontSize: responsiveFontSize(1.6),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
  },
  footerText: {
    fontSize: responsiveFontSize(1.6),
    color: '#666',
  },
  signUp: {
    color: '#4688F1',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    marginLeft: responsiveWidth(2),
  },
});

export default LoginUpScreen;



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   useWindowDimensions,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import axios from "axios";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

// const LoginUpScreen = ({ navigation }) => {
//   const { width } = useWindowDimensions();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     console.log("Login button pressed"); // Debug log
//     try {
//       // API call to backend
//       const response = await axios.post("http://192.168.29.167:5000/LoginUpScreen", {
//         email,
//         password,
//       });

//       console.log("Response:", response.data); // Debug log

//       if (response.status === 200) {
//         Alert.alert("Login Successful", `Welcome back, ${response.data.user.firstName}`);
//         navigation.navigate("HomeScreen"); // Redirect to home or dashboard
//       }
//     } catch (error) {
//       console.error("Error:", error); // Debug log
//       const errorMessage = error.response?.data?.message || "Something went wrong";
//       Alert.alert("Login Failed", errorMessage);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Welcome Back</Text>
//         <Text style={styles.subHeader}>Login to your account</Text>
//       </View>
//       <View style={[styles.formContainer, { paddingHorizontal: wp(5) }]}>
//         <Text style={styles.label}>Email/Phone</Text>
//         <TextInput
//           style={[styles.input, { paddingHorizontal: wp(5) }]}
//           placeholder="Email/Phone"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={[styles.input, { paddingHorizontal: wp(5) }]}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TouchableOpacity
//           style={styles.forgotPassword}
//           onPress={() => navigation.navigate("ForgotScreen")}
//         >
//           <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <View style={styles.footer}>
//           <Text>Not have an account?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
//             <Text style={styles.signUp}>Sign Up here</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     backgroundColor: "#fff",
//   },
//   header: {
//     alignItems: "center",
//     backgroundColor: "#4688F1",
//     paddingVertical: hp(3),
//     borderBottomLeftRadius: wp(8),
//     borderBottomRightRadius: wp(8),
//     marginBottom: hp(2),
//   },
//   headerText: {
//     fontSize: wp(6),
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: hp(1),
//   },
//   subHeader: {
//     fontSize: wp(4),
//     color: "#000",
//   },
//   formContainer: {
//     flex: 1,
//     paddingHorizontal: wp(5),
//     justifyContent: "center",
//   },
//   label: {
//     fontSize: wp(4),
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: hp(1),
//   },
//   input: {
//     width: wp(90),
//     height: hp(6),
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: wp(2),
//     paddingHorizontal: wp(4),
//     marginBottom: hp(2),
//     fontSize: wp(4),
//   },
//   button: {
//     width: wp(90),
//     height: hp(6),
//     backgroundColor: "#007bff",
//     borderRadius: wp(2),
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: hp(2),
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: wp(4),
//     fontWeight: "600",
//   },
//   forgotPassword: {
//     alignSelf: "flex-end",
//     marginBottom: hp(2),
//   },
//   forgotPasswordText: {
//     color: "#4688F1",
//     fontSize: wp(3.5),
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: hp(3),
//   },
//   footerText: {
//     fontSize: wp(3.5),
//     color: "#666",
//   },
//   signUp: {
//     color: "#4688F1",
//     fontSize: wp(3.5),
//     fontWeight: "600",
//     marginLeft: wp(2),
//   },
// });

// export default LoginUpScreen;

