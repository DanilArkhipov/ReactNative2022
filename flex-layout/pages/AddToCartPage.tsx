import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallCard, { CallImage } from '../components/callCard';
import Card from '../components/card';
import { Dimensions } from 'react-native';
import * as Svg from 'react-native-svg';

const AddToCartPage = () => {
    return (
     <SafeAreaView style={styles.container}>
        <Image style={styles.itemImage} source={{uri: 'https://sunprint.ru/static_optimized/images/catalog/units/00150/500x500/1158696.jpg?nocache=1640938958'}}></Image>
        <Text style={styles.header}>Супер классная куртка</Text>
        <Text style={styles.tittle}>$ 12.22</Text>
        <Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat molestiae corrupti hic nostrum, atque ipsum eaque in eos aut odit modi tempore dignissimos ducimus rem deleniti odio. Temporibus, doloremque ut.</Text>
        <View style={styles.horizontalContainer}>
            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqbrNHcsoU4Ds25-mA0pJOyZBg7cmi8JgTLD8giui&s'}}></Image>
            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqbrNHcsoU4Ds25-mA0pJOyZBg7cmi8JgTLD8giui&s'}}></Image>
            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqbrNHcsoU4Ds25-mA0pJOyZBg7cmi8JgTLD8giui&s'}}></Image>
            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqbrNHcsoU4Ds25-mA0pJOyZBg7cmi8JgTLD8giui&s'}}></Image>
            <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqbrNHcsoU4Ds25-mA0pJOyZBg7cmi8JgTLD8giui&s'}}></Image>
        </View>
        <View style={styles.horizontalContainer}>
            <View style={{backgroundColor: '#28c7ba' , ...styles.colorCircle}}></View>
            <View style={{backgroundColor: '#d5303d' , ...styles.colorCircle}}></View>
            <View style={{backgroundColor: '#30d5c8' , ...styles.colorCircle}}></View>
            <View style={{backgroundColor: 'green' , ...styles.colorCircle}}></View>
            <View style={{backgroundColor: '#1d9188' , ...styles.colorCircle}}></View>
            <View style={{backgroundColor: 'red' , ...styles.colorCircle}}></View>
        </View>
        <View style={styles.horizontalContainer}>
            <Text style={styles.size}>S</Text>
            <Text style={styles.size}>M</Text>
            <Text style={styles.size}>L</Text>
            <Text style={styles.size}>XL</Text>
        </View>
        <View style={styles.topLineContainer}>
            <Text style={styles.button}>Add To Cart</Text>
        </View>
     </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    itemImage: {
        height: 200,
        width: 150,
        margin: 5,
    },
    header: {
        fontSize: 32,
        color: 'grey',
        fontWeight: 'bold',
        margin: 5,
    },
    tittle: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        margin: 5,
    },
    text: {
        fontSize: 16,
        color: 'grey',
        margin: 5,
        textAlign: 'center',
    },
    horizontalContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    },
    colorCircle: {
        width: 30,
        height: 30,
        margin: 5,
        borderRadius: 50,
    },
    size: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "grey",
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    topLineContainer: {
        borderTopColor: 'grey',
        borderTopWidth: 2,
        flex:1,
        margin: 10,
        alignSelf: 'stretch'
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
  
  export default AddToCartPage;