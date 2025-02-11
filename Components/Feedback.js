import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const CustomCheckbox = ({ isChecked, onPress }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.checkbox, isChecked && styles.checked]}
  >
    {isChecked && <Text style={styles.checkmark}>✓</Text>}
  </TouchableOpacity>
);

const feedbackType = {
  appPerformance: false, // Changed from "product" to "appPerformance"
  featureRequest: false,
  customerSupport: false,
  usabilityDesign: false,
  generalFeedback: false
};

export default function Feedback() {
  const [feedback, setFeedback] = useState(feedbackType);

  const handleCheckboxChange = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Text key={i} style={styles.star}>{"\u2605"}</Text>
    ));
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.subtitle}>We Value Your Feedback!</Text>
      <Text style={styles.description}>Your insights help us enhance our services and improve your experience.</Text>

      <Text style={styles.sectionTitle}>What is your feedback about?</Text>
      {Object.keys(feedback).map((type) => (
        <View key={type} style={styles.checkboxContainer}>
          <CustomCheckbox
            isChecked={feedback[type]}
            onPress={() => handleCheckboxChange(type)}
          />
          <Text style={styles.checkboxLabel}>
  {type === 'appPerformance' ? 'App Performance' : type.charAt(0).toUpperCase() + type.slice(1)}
</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Tell us more about your experience</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <TextInput 
        style={[styles.input, { height: hp('15%') }]} 
        placeholder="Message" 
        multiline 
      />
   <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.sectionTitle}>Rate your Experience</Text>
      <Text style={{fontSize: wp('4.5%')}} >How would you rate our services?</Text>
      <View style={styles.ratingContainer}>
        {renderStars()}
      </View>
      </View>

   
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    marginBottom: hp('1.5%'),
    color: '#333',
  },
  subtitle: {
    fontSize: wp('4.5%'),
    marginBottom: hp('1%'),
    color: '#333',
  },
  description: {
    fontSize: wp('3.8%'),
    marginBottom: hp('3%'),
    color: '#333',
    lineHeight: hp('2.5%'),
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginBottom: hp('2%'),
    color: '#333',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  checkbox: {
    width: wp('5%'),
    height: wp('5%'),
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 4,
    marginRight: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#007BFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: wp('4%'),
  },
  checkboxLabel: {
    fontSize: wp('4%'),
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: wp('3%'),
    marginBottom: hp('1.5%'),
    borderRadius: 8,
    fontSize: wp('4%'),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: hp('3%'),
  },
  star: {
    fontSize: wp('8%'),
    color: '#FFD700',
    marginRight: wp('2%'),
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: hp('2%'),
    borderRadius: 8,
    alignItems: 'center',
marginLeft: wp('28%'),
marginRight: wp('28%'),
    justifyContent: 'center',
    marginBottom: hp('3%'),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },
});
