import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';

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
  const [profileImage, setProfileImage] = useState(require('../Images/p1.png'));

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          const uri = response.assets[0].uri;
          setProfileImage({ uri });
        }
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={wp('6%')} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Profile</Text>
      </View>
      
      <View style={styles.profileImageWrapper}>
        <Image 
          source={profileImage} 
          style={styles.profileImage} 
        />
        <TouchableOpacity style={styles.editIcon} onPress={handleImagePick}>
          <Icon name="pencil" size={wp('4%')} color="black" />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Your Name" value={form.name} onChangeText={text => handleChange('name', text)} />
      <TextInput style={styles.input} placeholder="Email" value={form.email} onChangeText={text => handleChange('email', text)} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone" value={form.phone} onChangeText={text => handleChange('phone', text)} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Date of Birth" value={form.dob} onChangeText={text => handleChange('dob', text)} />
      <TextInput style={styles.input} placeholder="Address" value={form.address} onChangeText={text => handleChange('address', text)} />
      
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
    </View>
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
