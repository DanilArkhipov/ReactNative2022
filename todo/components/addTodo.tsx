import { Modal, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { TodoData } from "../models/todoData";

export interface AddTodoProps {
    onSave: (data: TodoData) => void;
    onClose: () => void;
    showModal: boolean;
}

export default function AddTodo(props: AddTodoProps) {
    const [taskName, setTaskName] = useState(null);
    const [taskDescription, setTaskDescription] = useState(null);
    const [taskImage, setTaskImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setTaskImage(result.assets[0].uri);
        }
    };

    const clearSelectedData = () => {
        setTaskName(null);
        setTaskDescription(null);
        setTaskImage(null);
    };

    const saveData = () => {
        const data = new TodoData();
        data.name = taskName;
        data.description = taskDescription;
        data.imageUrl = taskImage;
        data.isCompleted = false;
        clearSelectedData();
        props.onSave(data);
        props.onClose();
    };

    return (
        <Modal visible={props.showModal} transparent={true}>
            <View style={{
                backgroundColor: 'white', justifyContent: 'center',
                flex: 1,
            }}>
                <View style={{ margin: 25, borderRadius: 5, borderColor: 'grey', borderWidth: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", textAlignVertical: 'center', padding: 5 }}>Новая задача</Text>
                        <TouchableOpacity onPress={() => { clearSelectedData(), props.onClose(); }} style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, textAlign: "center", textAlignVertical: 'center' }}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5, paddingRight: 10 }}>Название:</Text>
                        <TextInput multiline={true} value={taskName} onChangeText={setTaskName} placeholder='Введите название' style={{ flex: 1 }}></TextInput>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5, paddingRight: 10 }}>Описание:</Text>
                        <TextInput multiline={true} value={taskDescription} onChangeText={setTaskDescription} placeholder='Введите описание' style={{ flex: 1 }}></TextInput>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {taskImage == null ?
                            <TouchableOpacity onPress={pickImageAsync} style={{ flex: 1, backgroundColor: '#D3D3D3', margin: 5, marginBottom: 10, borderRadius: 5 }}>
                                <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5 }}>Прикрепить картинку</Text>
                            </TouchableOpacity> :
                            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1 }}>
                                <Image source={{ uri: taskImage, height: 200, width: 200 }}></Image>
                                <TouchableOpacity onPress={() => { setTaskImage(null) }} style={{ backgroundColor: '#D3D3D3', marginHorizontal: 5, borderRadius: 5, alignSelf: "stretch", marginVertical: 10 }}>
                                    <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5 }}>Убрать картинку</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    {!taskName || !taskDescription ?
                        <View></View> :
                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1 }}>
                            <TouchableOpacity disabled={!taskName || !taskDescription} onPress={saveData} style={{ backgroundColor: '#D3D3D3', marginHorizontal: 5, borderRadius: 5, alignSelf: "stretch", marginVertical: 10, flex: 1 }}>
                                <Text style={{ fontSize: 16, textAlign: "center", textAlignVertical: 'center', padding: 5 }}>Сохранить</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
            </View>
        </Modal>
    );
}

