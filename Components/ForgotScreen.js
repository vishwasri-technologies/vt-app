import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const ForgotScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordReset = async () => {
    if (!email || !newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://192.168.29.167:5000/ForgotScreen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Password updated successfully");
        navigation.navigate("LoginUpScreen");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Server error. Please try again.");
    }
  };




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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create new password</Text>
        <Text style={styles.subHeader}>Keep it simple. Keep it safe.</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
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
    fontWeight: "bold",
    color: "#000",
    marginBottom: responsiveHeight(1),
  },
  subHeader: {
    fontSize: responsiveFontSize(2),
    color: "#000",
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
});

export default ForgotScreen;




// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import {
//   responsiveWidth,
//   responsiveHeight,
//   responsiveFontSize,
// } from "react-native-responsive-dimensions";

// const ForgotScreen = ({ navigation }) => {
//   // const [email, setEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handlePasswordReset = async () => {
//     if (!newPassword || !confirmPassword) {
//       Alert.alert("Error", "All fields are required");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("http://192.168.29.167:5000/ForgotScreen", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ newPassword, confirmPassword }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         Alert.alert("Success", "Password updated successfully");
//         navigation.navigate("LoginUpScreen");
//       } else {
//         Alert.alert("Error", data.message);
//       }
//     } catch (error) {
//       Alert.alert("Error", "Server error. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Create new password</Text>
//         <Text style={styles.subHeader}>Keep it simple. Keep it safe.</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.label}>New Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="New Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={newPassword}
//           onChangeText={setNewPassword}
//         />

//         <Text style={styles.label}>Confirm Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />

//         <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
//           <Text style={styles.buttonText}>Save Password</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     alignItems: "center",
//     backgroundColor: "#4688F1",
//     paddingVertical: responsiveHeight(3),
//     borderBottomLeftRadius: responsiveWidth(8),
//     borderBottomRightRadius: responsiveWidth(8),
//     marginBottom: responsiveHeight(2),
//   },
//   headerText: {
//     fontSize: responsiveFontSize(3),
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: responsiveHeight(1),
//   },
//   subHeader: {
//     fontSize: responsiveFontSize(2),
//     color: "#000",
//   },
//   formContainer: {
//     flex: 1,
//     paddingHorizontal: responsiveWidth(5),
//     justifyContent: "center",
//   },
//   label: {
//     fontSize: responsiveFontSize(1.8),
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: responsiveHeight(1),
//   },
//   input: {
//     width: responsiveWidth(90),
//     height: responsiveHeight(6),
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: responsiveWidth(2),
//     paddingHorizontal: responsiveWidth(4),
//     marginBottom: responsiveHeight(2),
//     fontSize: responsiveFontSize(1.8),
//   },
//   button: {
//     width: responsiveWidth(90),
//     height: responsiveHeight(6),
//     backgroundColor: "#007bff",
//     borderRadius: responsiveWidth(2),
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: responsiveHeight(2),
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: responsiveFontSize(2),
//     fontWeight: "600",
//   },
// });

// export default ForgotScreen;

