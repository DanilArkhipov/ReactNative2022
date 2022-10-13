import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallCard, { CallImage } from '../components/callCard';
import Card from '../components/card';
import { Dimensions } from 'react-native';
import * as Svg from 'react-native-svg';

const LikePage = () => {
    return (
     <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.paddingContainer}>
                <Text style={styles.contentHeader}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae officia exercitationem asperiores deleniti, nesciunt a illo? Maiores rem praesentium quas placeat tempora, eaque pariatur odit distinctio totam, quibusdam eligendi!.</Text>
                <Text style={styles.contentLink}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Text style={styles.contenDataText}>2017-11-27 13:03:01</Text>
                <View style={styles.horizontalContainer}>
                    <Image style={styles.avatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB45dRu0W4SF8EVI7nLlz_hqX3P7AMbENX-t6dAiNw&s'}}></Image>
                    <Text style={styles.userName}>Alice Johnson</Text>
                </View>
                <Text style={styles.button}>Like</Text>
            </View>
        </View>
     </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#53dcd1',
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '300'
    },
    content: {
        flex: 9,
        backgroundColor: '#fff',
    },
    paddingContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    contentHeader: {
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
        marginVertical: 5,
    },
    contentText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'left',
        marginVertical: 5,
    },
    contentLink: {
        fontSize: 14,
        fontWeight: '400',
        color: '#53dcd1',
        textAlign: 'left',
        marginBottom: 5,
    },
    contenDataText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'grey',
        textAlign: 'left',
        marginBottom: 5,
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginVertical: 5,
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 30,
        borderColor: '#53dcd1',
        borderWidth: 3,
        borderStyle:'solid',
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#53dcd1',     
        textAlignVertical: 'center', 
    },
    button: {
        color: 'white',
        backgroundColor: '#53dcd1',
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
    }
  });
  
  export default LikePage;