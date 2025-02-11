
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomScreen from '../navigation/BottomScreen'; // Assuming BottomScreen is your bottom navigation component

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.29.167:5000/Notifications')  
      .then((response) => response.json()) 
      .then((data) => {
        console.log('Notifications data:', data);
        setNotifications(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      });
  }, []);

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTimestamp}>
        {new Date(item.createdAt).toLocaleString()}
      </Text>
    </View>
  );

  const handleViewAll = () => {
    // Logic for handling View All button click
    console.log("View All notifications");
    // You can navigate to a detailed page or perform another action
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Notifications</Text>
        <Icon name="bell" size={20} color="black" style={styles.bellIcon} />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : notifications.length === 0 ? (
          <Text>No notifications available.</Text>
        ) : (
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={(item) => item._id.toString()}
          />
        )}

        {/* View All Button */}
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAll}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Bottom Navbar */}
      <View style={styles.bottomNavbarContainer}>
        <BottomScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 13,
    paddingTop: 20,
  },
  scrollContent: {
    flexGrow: 1,  // Makes the scroll content grow and fill the available space
    paddingBottom: 80,  // Adjust space to prevent content from being hidden behind BottomNavbar
  },
  bellIcon: {
    position: 'absolute', // Position the icon absolutely within the container
    right: 20,             // Align the icon to the right with a 20px margin
    top: 10,               // Add some space from the top
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  notificationContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  notificationTimestamp: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
    textAlign: 'left',
  },
  viewAllButton: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 40,
    alignSelf: 'center',
  },
  viewAllButtonText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomNavbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white', // Optional: Add background color to make it distinct
    elevation: 3, // Optional: Add shadow for visibility
    zIndex: 10, // Ensure the bottom navbar is above the content
  },
});
