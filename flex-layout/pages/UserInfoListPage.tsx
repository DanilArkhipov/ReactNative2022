import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/card';

const UserInfoList = () => {
  return (
   <SafeAreaView style={styles.container}>
     <ScrollView>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7d7',
  },
});

export default UserInfoList;