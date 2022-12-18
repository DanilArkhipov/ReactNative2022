import { Modal, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import { TodoData } from "../models/todoData";

export interface TodoProps {
    onClose: () => void;
    showModal: boolean;
    data: TodoData | null
}

export default function Todo(props: TodoProps) {
    return (
        <Modal visible={props.showModal} transparent={true}>
            <View style={{ backgroundColor: 'white', justifyContent: 'center', flex: 1 }}>
                <View style={{ margin: 25, borderRadius: 5, borderColor: 'grey', borderWidth: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", textAlignVertical: 'center', padding: 5 }}>{props.data?.name}</Text>
                        <TouchableOpacity onPress={() => { props.onClose(); }} style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, textAlign: "center", textAlignVertical: 'center' }}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5, paddingRight: 10 }}>{props.data?.description}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {props.data?.imageUrl == null ?
                            <View></View> :
                            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1 }}>
                                <Image source={{ uri: props.data?.imageUrl, height: 200, width: 200 }}></Image>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
}

