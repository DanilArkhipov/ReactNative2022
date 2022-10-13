import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallCard, { CallImage } from '../components/callCard';
import Card from '../components/card';


const OrderAcceptedPage = () => {
  return (
   <SafeAreaView style={styles.container}>
     <Image style={styles.bigThumbImage} source={{uri: 'https://www.pngall.com/wp-content/uploads/5/Like-PNG-HD-Image.png'}}></Image>
     <Text style={styles.header}>Congratulation, your order is accepted</Text>
     <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
     <Text style={styles.button}>Continue</Text>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7d7',
    alignItems: 'center',
  },
  bigThumbImage: {
    width: 150,
    height: 135,
    margin: 30,
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 50,
  },
  button: {
    color: 'white',
    backgroundColor: '#53dcd1',
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 80,
}
});

export default OrderAcceptedPage;