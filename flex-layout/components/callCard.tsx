import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export type CallCardData = {
    avatarUrl: String,
    name: String,
    date: String,
    callImage: CallImage
}

export const audioCallIconUrl = 'https://img.icons8.com/color/344/phone.png';
export const videoCallIconUrl = 'https://img.icons8.com/color/344/video-call--v1.png';

const CallCard = (data: CallCardData) => {
  return (
        <View style={styles.container}>
          <View style={styles.userDataContainer}>
            <Image style={styles.avatar} source={{uri: data.avatarUrl.toString()}}></Image>
            <View style={styles.UserInfoConteiner}>
                <Text style={styles.Name}>{data.name}</Text>
                <View style={styles.HorizontalContainer}>
                    <Image style={styles.SmallIcon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1280/1280891.png'}}></Image>
                    <Text style={styles.Date}>{data.date}</Text>
                </View>
            </View>
          </View>
          <Image style={styles.avatar} source={{uri: data.callImage == CallImage.audio ? audioCallIconUrl : videoCallIconUrl}}></Image>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 5,
      borderRadius: 15,
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight:20,
    },
    userDataContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
    },
    UserInfoConteiner: {
        flex:1,
    },
    Name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    Date: {
        fontSize: 14,
        color: "grey",
    },
    HorizontalContainer: {
        flex: 1,
        flexDirection: "row",
    },
    SmallIcon: {
        width: 18,
        height: 18,
        marginRight: 5,
    },
  });

 export enum CallImage {
    video,
    audio
  }

export default CallCard