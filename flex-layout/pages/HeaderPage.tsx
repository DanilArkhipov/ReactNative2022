import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallCard, { CallImage } from '../components/callCard';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const HeaderPage = () => {
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2t-b_-gjeAAKQnOlJPLUM--_UJS9aPLtIDFl61gnaQ&s'}} />
          <Text style={styles.userName}>John Doe</Text>
        </View>
     </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#53dcd1',
        alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      margin: 5,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 50,
    },
    userName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    }
  });
  
  export default HeaderPage;