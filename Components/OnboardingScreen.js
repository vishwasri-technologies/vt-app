import React, { useEffect } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import {
  responsiveWidth as wp,
  responsiveHeight as hp,

} from 'react-native-responsive-dimensions';
import v1 from '../Images/v1.jpg';
const OnboardingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
  
    <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="black" />
      <Image 
        source={v1} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: wp(100), // 85% of screen width
    height: hp(40), // 30% of screen height
  
  }
});

export default OnboardingScreen;