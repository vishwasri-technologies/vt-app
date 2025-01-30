
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
