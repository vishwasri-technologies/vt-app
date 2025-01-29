import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import lady from "../Images/lady1.png";

const WelcomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const handleGetStartedPress = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={lady}
            style={[styles.image, { width: width * 0.8, height: height * 0.42 }]}
            resizeMode="contain"
          />
        </View>

        <Text style={[styles.welcomeText, { fontSize: width * 0.08, paddingHorizontal: "5%", }]}>
          Welcome to
        </Text>
        <Text style={[styles.companyName, { fontSize: width * 0.08, paddingHorizontal: "5%", }]}>
          Vishwasri Technologies
        </Text>
        <Text style={[styles.tagline, { fontSize: width * 0.04, paddingHorizontal: "5%", }]}>
          Empowering Your Digital Vision
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.035, paddingHorizontal: "5%", }]}>
          Designing solutions that meet your unique needs, from streamlined
          processes to seamless designs. We craft software that adapts and
          grows, driving your business toward a smarter future.
        </Text>
        <TouchableOpacity
          style={[styles.getStartedButton, { width: width * 0.9 }]}
          onPress={handleGetStartedPress}
        >
          <Text style={[styles.buttonText, { fontSize: width * 0.045 }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  
  },
  imageContainer: {
  
    marginBottom: "5%",
    height: "45%",
    backgroundColor: "#4688F1",

  },
  image: {
flex: 1, 
justifyContent: "center", 
alignItems: "center",
 
  paddingHorizontal: "75%",
 
  },
  welcomeText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "left",
  },
  companyName: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "2%",
  },
  tagline: {
    color: "#555",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "10%",
  },
  description: {
    textAlign: "left",
    color: "#333",
    marginBottom: "20%",
  },
  getStartedButton: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4688F1",
    paddingVertical: "3%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;


