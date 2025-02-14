<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ContactUs() {
  const location = {
    latitude: 17.4441147,
    longitude: 78.4607775,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get in Touch with Us</Text>
      <Text style={styles.description}>
        Let’s build something great together. Contact us for inquiries, support, or business solutions!
      </Text>

      {/* Email Section */}
      <View style={styles.section}>
        <Icon name="email" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Email Support</Text>
      </View>
      <Text style={styles.detailText}>- General Inquiries</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:vishwasritechnologies@vishcom.net')}>
        <Text style={styles.linkText}>vishwasritechnologies@vishcom.net</Text>
      </TouchableOpacity>

      {/* Website Section */}
      <View style={styles.section}>
        <Icon name="language" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Website</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.vishcom.net')}>
        <Text style={styles.linkText}>www.vishcom.net (Tap to Visit)</Text>
      </TouchableOpacity>

      {/* Office Address Section */}
      <View style={styles.section}>
        <Icon name="location-on" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Office Address</Text>
      </View>
      <Text style={styles.detailText}>
        Vishwasi Technologies, H.no: 10-72/b/vb, Flat no: T - 400/8, Technopolis, Gachibowli Complex, 
        Dwaraka das colony, Begumpet 500016
      </Text>

      {/* Google Map */}
      <MapView style={styles.map} initialRegion={location}>
        <Marker coordinate={location} title="Vishwasi Technologies" />
      </MapView>

      {/* Open in Maps Button */}
      <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/place/Vishwasri+Technologies+Pvt.Ltd/@17.4441147,78.4607775,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9100083e8389:0xceb1ec1986df69c8!8m2!3d17.4441096!4d78.4633524!16s%2Fg%2F11wwpw6zvb?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D")}>
        <Text style={styles.linkText}>Open in Maps</Text>
      </TouchableOpacity>

      {/* Availability */}
      <Text style={styles.availability}>Availability: Mon - Sat | 9 AM - 6 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  header: {
    fontSize: wp('6.5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  description: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  subHeader: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('2%'),
  },
  detailText: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  linkText: {
    color: 'blue',
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  map: {
    width: '100%',
    height: hp('25%'),
    marginVertical: hp('2%'),
    borderRadius: wp('2%'),
  },
  availability: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
});
=======
=======
>>>>>>> 75e5302 (Second)
import { View, Text } from 'react-native'
import React from 'react'

export default function Contactus() {
  return (
    <View>
      <Text>Contactus</Text>
    </View>
  )
}
<<<<<<< HEAD
>>>>>>> ca07a65 (Aboutus)
=======
=======
=======
>>>>>>> edb943d (done notifications)
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ContactUs() {
  const location = {
    latitude: 17.4441147,
    longitude: 78.4607775,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get in Touch with Us</Text>
      <Text style={styles.description}>
        Let’s build something great together. Contact us for inquiries, support, or business solutions!
      </Text>

      {/* Email Section */}
      <View style={styles.section}>
        <Icon name="email" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Email Support</Text>
      </View>
      <Text style={styles.detailText}>- General Inquiries</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:vishwasritechnologies@vishcom.net')}>
        <Text style={styles.linkText}>vishwasritechnologies@vishcom.net</Text>
      </TouchableOpacity>

      {/* Website Section */}
      <View style={styles.section}>
        <Icon name="language" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Website</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.vishcom.net')}>
        <Text style={styles.linkText}>www.vishcom.net (Tap to Visit)</Text>
      </TouchableOpacity>

      {/* Office Address Section */}
      <View style={styles.section}>
        <Icon name="location-on" size={wp('6%')} color="black" />
        <Text style={styles.subHeader}>Office Address</Text>
      </View>
      <Text style={styles.detailText}>
        Vishwasi Technologies, H.no: 10-72/b/vb, Flat no: T - 400/8, Technopolis, Gachibowli Complex, 
        Dwaraka das colony, Begumpet 500016
      </Text>

      {/* Google Map */}
      <MapView style={styles.map} initialRegion={location}>
        <Marker coordinate={location} title="Vishwasi Technologies" />
      </MapView>

      {/* Open in Maps Button */}
      <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/place/Vishwasri+Technologies+Pvt.Ltd/@17.4441147,78.4607775,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9100083e8389:0xceb1ec1986df69c8!8m2!3d17.4441096!4d78.4633524!16s%2Fg%2F11wwpw6zvb?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D")}>
        <Text style={styles.linkText}>Open in Maps</Text>
      </TouchableOpacity>

      {/* Availability */}
      <Text style={styles.availability}>Availability: Mon - Sat | 9 AM - 6 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  header: {
    fontSize: wp('6.5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  description: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  subHeader: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('2%'),
  },
  detailText: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  linkText: {
    color: 'blue',
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
  },
  map: {
    width: '100%',
    height: hp('25%'),
    marginVertical: hp('2%'),
    borderRadius: wp('2%'),
  },
  availability: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> f535048 (Second)
<<<<<<< HEAD
>>>>>>> 75e5302 (Second)
=======
=======

>>>>>>> 213670b (changes in forgot screen)
>>>>>>> 534bdd3 (changes in forgot screen)
=======
});
>>>>>>> edb943d (done notifications)
