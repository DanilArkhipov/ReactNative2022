import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

export type AvatarCardData = {
    avatarUrl: String,
}

const windowWidth = Dimensions.get('window').width;

const AvatarCard = (data: AvatarCardData) => {
  return (
    <Image style={styles.avatarImage} source={{uri: data.avatarUrl.toString()}}></Image>
  )
}

const styles = StyleSheet.create({
    avatarImage: {
        width: (windowWidth - 6) / 3,
        height: (windowWidth - 6) / 3,
        margin: 1
    }
  });


export default AvatarCard