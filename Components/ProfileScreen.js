
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator,  Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import p1 from'../Images/p1.png';
import { Alert } from 'react-native'; 
// import LoginUpScreen from './LoginUpScreen';
const ProfileScreen = () => {
  const navigation = useNavigation();
  
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [logoutModalVisible, setLogoutModalVisible] = useState(false); 


  useEffect(() => {

    const fetchUserProfile = async () => {
      try { 
        const response = await fetch("https://vt-app-backend-test.vishcom.net/api/ProfileScreen?email=${userEmail}");
       
        const storedName = await AsyncStorage.getItem('name');
        if (storedName) {
          setUserData(prevState => ({ ...prevState, name: storedName }));
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        Alert.alert("Error", err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchUserProfile();
  }, []); 

  
  const handleLogout = async () => {
    try {
      console.log("Logging out...");
    
      await AsyncStorage.removeItem('userToken');
      console.log("User session removed");
      Alert.alert("Logged out", "You have been logged out successfully.");
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginUpScreen' }],
      });

    } catch (error) {
      console.log("Error during logout:", error);
      Alert.alert("Error", "An error occurred during logout.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={wp('5%')} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileImageWrapper}>
          <Image 
            source={p1}
            style={styles.profileImage} 
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#007BFF" /> 
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text> 
        ) : (
          
          <Text style={styles.userName}>{userData?.name || "User Name"}</Text>
        )}
        {/* <Text style={styles.userName}>User Name</Text> */}
        

        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}
          onPress={() => {
            if (item.label === "Logout") {
              console.log("Logout clicked");
              setLogoutModalVisible(true);
            } else {
              navigation.navigate(item.screen);
            }
          }}>
            <Icon name={item.icon} size={wp('5%')} color="black" style={styles.icon} />
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon name="angle-right" size={wp('6%')} color="black" style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={logoutModalVisible}
        onRequestClose={() =>{
          console.log("Modal closed");
        setLogoutModalVisible(false)}}>

        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const menuItems = [
  { label: 'Privacy and Security', icon: 'info-circle',screen: 'Privacy'  },
  { label: 'Help and Support', icon: 'question-circle', screen: 'Help'  },
  { label: 'Terms and Policies', icon: 'file-text',screen: "Terms" },
  { label: 'Join our Team', icon: 'users',screen: "Join" },
  { label: 'Logout', icon: 'sign-out' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp('4%'),
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
  profileSection: {
    alignItems: 'center',
    marginVertical: hp('3%'),
  },
  profileImageWrapper: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('12.5%'),
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginTop: hp('1%'),
  },
  editProfileButton: {
    backgroundColor: '#007BFF',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('5%'),
    marginTop: hp('1.5%'),
  },
  editProfileText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  menuSection: {
    marginTop: hp('3%'),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: wp('3%'),
  },
  menuText: {
    fontSize: wp('4.5%'),
  },
  arrowIcon: {
    marginLeft: 'auto',
    marginRight: wp('9%'),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: wp('6%'),
    borderRadius: wp('4%'),
    alignItems: 'center',
    width: wp('80%'),
  },
  modalText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('5%'),
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('4%'),
    marginBottom: hp('3%'),
  },
  logoutButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  cancelText: {
    fontSize: wp('4%'),
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;


