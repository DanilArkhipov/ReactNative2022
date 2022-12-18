import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import { TodoData } from "../models/todoData";

export interface todoReadonlyListItemProps {
    onClick: (data: TodoData) => void;
    data: TodoData
}

export default function TodoReadonlyListItem(props: todoReadonlyListItemProps) {

    return (
        <View style={{ flexDirection: "row", padding: 10, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'grey', flex: 1 }}>
            <TouchableOpacity onPress={() => props.onClick(props.data)} style={{ flexDirection: "row", padding: 10, justifyContent: 'flex-start', flex: 1 }}>
                <Image source={{ uri: props.data.imageUrl, height: 50, width: 50 }} style={{ marginRight: 10, }}></Image>
                <View>
                    <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: '600', textAlign: 'left', textAlignVertical: 'center', color: 'black', marginRight: 50, flex: 1 }}>{props.data.name}</Text>
                    <Text numberOfLines={3} style={{ fontSize: 14, fontWeight: '400', textAlign: 'left', textAlignVertical: 'center', color: 'grey', marginRight: 80 }}>{props.data.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

