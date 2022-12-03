import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export type ButtonData = {
    buttonText: string,
    onClick: () => void,
    textColor?: string,
}

const Button = (data: ButtonData) => {
  return (
        <TouchableOpacity style={styles.container} onPress={data.onClick}>
          <Text style={{...styles.text, color: data.textColor ?? 'black'}}>{data.buttonText}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      textAlign: "center",
      textAlignVertical: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 5,
      width: 60,
      height: 60,
      margin: 1
    },
    text:{
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
      textAlignVertical: "center",
    }
  });

export default Button