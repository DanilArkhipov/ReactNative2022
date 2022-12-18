import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import { TodoData } from "../models/todoData";

export interface todoEditableListItemProps {
    onClick: (data: TodoData) => void;
    onDelete: (data: TodoData) => void;
    onComplete: (data: TodoData) => void;
    data: TodoData
}

export default function TodoEditableListItem(props: todoEditableListItemProps) {

    return (
        <View style={{ flexDirection: "row", padding: 10, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'grey', flex: 1 }}>
            <TouchableOpacity onPress={() => props.onClick(props.data)} style={{ flexDirection: "row", padding: 10, justifyContent: 'flex-start', flex: 1 }}>
                <Image source={{ uri: props.data.imageUrl, height: 50, width: 50 }} style={{ marginRight: 10, }}></Image>
                <View>
                    <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: '600', textAlign: 'left', textAlignVertical: 'center', color: 'black', marginRight: 50, flex: 1 }}>{props.data.name}</Text>
                    <Text numberOfLines={3} style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', textAlignVertical: 'center', color: 'grey', marginRight: 80 }}>{props.data.description}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => props.onComplete(props.data)}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828710.png", width: 25, height: 25 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => props.onDelete(props.data)}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/64/64022.png", width: 25, height: 25 }}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

