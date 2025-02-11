import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import p1 from '../Images/p1.png';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(false);

    console.log("User logged out");
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
          <Image source={p1} style={styles.profileImage} />
        </View>
        <Text style={styles.userName}>User Name</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => {
              if (item.label === "Logout") {
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
        onRequestClose={() => setLogoutModalVisible(false)}>
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
  { label: 'Privacy and Security', icon: 'info-circle', screen: 'Privacy' },//
  { label: 'Help and Support', icon: 'question-circle', screen: 'Help' },//
  { label: 'Terms and Policies', icon: 'file-text',screen: "Terms"  },//
  { label: 'Join our Team', icon: 'users',screen: "Join"  },//
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
