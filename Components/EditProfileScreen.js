
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: ''
  });
  
  const [profileImage, setProfileImage] = useState(null);

    // Fetch the saved profile data when the component mounts
    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const name = await AsyncStorage.getItem('name');
          const email = await AsyncStorage.getItem('email');
          const phone = await AsyncStorage.getItem('phone');
          const dob = await AsyncStorage.getItem('dob');
          const address = await AsyncStorage.getItem('address');
          const image = await AsyncStorage.getItem('profileImage');
  
          if (name && email && phone && dob && address) {
            setForm({ name, email, phone, dob, address });
          }
          if (image) {
            setProfileImage(image);
          }
        } catch (error) {
          console.error('Error loading profile data', error);
        }
      };
  
      fetchProfileData();
    }, []); 

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };


  // Handle Save Profile
  const handleSave = async () => {
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
  if (!form.name.trim()) {
    Alert.alert("Error", "Name is required!");
    return;
  }
  if (!nameRegex.test(form.name)) {
    Alert.alert("Error", "Name must contain only letters!");
    return;
  }

  // Validate Email: Must be in a valid email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!form.email) {
    Alert.alert("Error", "Email is required!");
    return;
  }
  if (!emailRegex.test(form.email)) {
    Alert.alert("Error", "Please enter a valid email address!");
    return;
  }

  // Validate Phone: Must contain exactly 10 digits
  const phoneRegex = /^[0-9]{10}$/;
  if (!form.phone) {
    Alert.alert("Error", "Phone number is required!");
    return;
  }
  if (!phoneRegex.test(form.phone)) {
    Alert.alert("Error", "Phone number must be 10 digits long!");
    return;
  }

  // Validate Date of Birth: Must be in dd-mm-yyyy format and a valid date
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

if (!dobRegex.test(form.dob)) {
  Alert.alert("Error", "Please enter a valid date of birth in yyyy-mm-dd format!");
  return;
}


  // Validate Address: Can contain letters, numbers, and special characters
  if (!form.address.trim()) {
    Alert.alert("Error", "Address is required!");
    return;
  }

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('dob', form.dob);
    formData.append('address', form.address);

    if (profileImage) {
      formData.append('profileImage', {
        uri: profileImage,
        type: 'image/jpeg',
        name: 'profile.jpg'
      });
    }

    try {
      const response = await fetch('http://192.168.29.167:5000/api/EditProfileScreen?email=${userEmail}', { 
        method: 'POST',
        body: formData,  // ✅ Let the browser handle Content-Type automatically
        headers: {
          'Accept': 'application/json'
        },
      });

      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('name', form.name);
        await AsyncStorage.setItem('email', form.email);
        await AsyncStorage.setItem('phone', form.phone);
        await AsyncStorage.setItem('dob', form.dob);
        await AsyncStorage.setItem('address', form.address);
        // Success: Profile updated, show success message
        Alert.alert("Success", "Profile updated successfully!", [
          { text: "OK", onPress: () => navigation.navigate('HomeScreen') }
        ]);
      } else {
        // Error: Profile update failed
        Alert.alert("Error", data.error || "Failed to update profile");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={wp('6%')} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Edit Profile</Text>
        </View>
        
        <View style={styles.profileImageWrapper}>
          <Image 
            source={profileImage ? { uri: profileImage } : require('../Images/p1.png')} 
            style={styles.profileImage} 
          />
          {/* <TouchableOpacity style={styles.editIcon} onPress={handleImagePick}>
            <Icon name="pencil" size={wp('4%')} color="black" />
          </TouchableOpacity> */}
        </View>
        <Text>Name :</Text>
        <TextInput style={styles.input}  value={form.name} onChangeText={text => handleChange('name', text)} />
        <Text>Email :</Text>
        <TextInput style={styles.input}  value={form.email} onChangeText={text => handleChange('email', text)} keyboardType="email-address" />
        <Text>Phone :</Text>
        <TextInput style={styles.input}  value={form.phone} onChangeText={text => handleChange('phone', text)} keyboardType="phone-pad" />
        <Text>Date of Birth :</Text>
        <TextInput style={styles.input}  value={form.dob} onChangeText={text => handleChange('dob', text)} />
        <Text>Address :</Text>
        <TextInput style={styles.input}  value={form.address} onChangeText={text => handleChange('address', text)} />
        
        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp('5%'),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  backButton: {
    position: 'absolute',
    left: wp('2%'),
  },
  header: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImageWrapper: {
    alignSelf: 'center',
    marginVertical: hp('3%'),
    position: 'relative',
  },
  profileImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('12.5%'),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: wp('5%'),
    padding: wp('1%'),
    elevation: 3,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp('2%'),
    padding: hp('1.5%'),
    marginVertical: hp('1%'),
    fontSize: wp('4%'),
  },
  saveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: hp('1.5%'),
    borderRadius: wp('5%'),
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;