
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
  appPerformance: false,
  featureRequest: false,
  customerSupport: false,
  usabilityDesign: false,
  generalFeedback: false
};

export default function Feedback() {
  const [feedback, setFeedback] = useState(feedbackType);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0); 

  // Correctly defined handleCheckboxChange function
  const handleCheckboxChange = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  
  const handleSubmit = async () => {
    // Validation
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
      alert('Full Name must contain only letters and spaces');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      alert('Please enter a valid phone number with 10 digits');
      return;
    }
    if (!message.trim()) {
      alert('Message cannot be empty');
      return;
    }
  
    const feedbackTypes = [];
    if (feedback.appPerformance) feedbackTypes.push('App Performance');
    if (feedback.featureRequest) feedbackTypes.push('Feature Request');
    if (feedback.customerSupport) feedbackTypes.push('Customer Support');
    if (feedback.usabilityDesign) feedbackTypes.push('Usability & Design');
    if (feedback.generalFeedback) feedbackTypes.push('General Feedback');
  
    const data = {
      fullName,
      email,
      phone,
      message,
      feedbackTypes,
      rating,
    };
  
    try {
      const response = await fetch('http://192.168.29.167:5000/Feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      alert(result.message); // Show success message to the user
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Error submitting feedback');
    }
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Text
        key={i}
        style={styles.star}
        onPress={() => setRating(i + 1)} // Set rating when a star is clicked
      >
        {i < rating ? '\u2605' : '\u2606'}
      </Text>
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
            <CustomCheckbox isChecked={feedback[type]} onPress={() => handleCheckboxChange(type)} />
            <Text style={styles.checkboxLabel}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Tell us more about your experience</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)} // Store full name
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)} // Store email
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)} // Store phone number
        />
        <TextInput
          style={[styles.input, { height: hp('15%') }]}
          placeholder="Message"
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)} // Store message
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Rate your Experience</Text>
          <Text style={{ fontSize: wp('4.5%') }}>How would you rate our services?</Text>
          <View style={styles.ratingContainer}>{renderStars()}</View>
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

