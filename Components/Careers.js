import React from 'react';
import { View, Text,textAlign, Alert,StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'

const jobListings = [
  {
    title: 'Full Stack Developer',
    location: ' Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'Frontend, Backend, Database',
  },
  {
    title: 'Web Developer',
    location: 'Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'APIs, SEO, Responsive Web Design',
  },
  {
    title: 'App Developer',
    location: 'Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'Cross-Platform Development',
  },
  {
    title: 'UI/UX Designer',
    location: 'Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'Wireframing, Prototyping, Responsive',
  },
  {
    title: 'Digital Marketing',
    location: 'Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'SEO & Content Marketing, CRO',
  },
  {
    title: 'Human Resources',
    location: 'Begumpet, Hyderabad',
    experience: '0-2 Years',
    skills: 'Recruitment, Relations, Payroll',
  },
];

export default function Careers() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Join us at </Text>
        
    <Text style={[styles.header, { textAlign: 'left' }]}>
      Vishwasri Technologies
    </Text>
      <Text style={styles.subHeader}>
        Explore exciting opportunities, innovate with cutting-edge technology, and grow with a dynamic team. Join us today and be part of the next big transformation!
      </Text>
      {jobListings.map((job, index) => (
        <View key={index} style={styles.jobCard}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="location-outline" size={wp('4%')} color="#333" />
            <Text style={styles.jobLocation}>{job.location}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="briefcase-outline" size={wp('4%')} color="#333" />

            <Text style={styles.jobExperience}>{job.experience}</Text>
          </View>
          <Text style={styles.jobSkills}>{job.skills}</Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText} onPress={() => Alert.alert('Jobs','No Vacancy')}>Apply now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  header: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  subHeader: {
    fontSize: wp('4%'),
    marginBottom: hp('4%'),
    lineHeight: wp('5%'),
  },
  jobCard: {
    width:wp('90%'),
    height: hp('25%'),
    backgroundColor: '#f9f9f9',
    padding: wp('4%'),
    borderRadius: wp('2%'),
    marginBottom: hp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: wp('2%'),
    elevation: 2,
    
  },
  jobTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  jobLocation: {
    paddingHorizontal: wp('3%'),
    fontSize: wp('4%'),
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  jobExperience: {
    paddingHorizontal: wp('3%'),
    fontSize: wp('4%'),
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  jobSkills: {
    fontSize: wp('4%'),
    color: '#333',
    marginBottom: hp('1%'),
  },
  applyButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007bff',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('2%'),
    // marginTop: hp('10%'),
  marginBottom: hp('3%'),
  marginRight: wp('3%'),
  },
  applyButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    textAlign: 'center',

  },
});
