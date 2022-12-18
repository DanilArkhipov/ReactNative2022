import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView } from 'react-native';
import AddTodo from '../components/addTodo';
import Todo from '../components/todo';
import TodoEditableListItem from '../components/todoEditableListItem';
import TodoReadonlyListItem from '../components/todoReadOnlyListItem';
import { observer } from 'mobx-react-lite';
import taskStore from '../data/taskStore';


export const CompletedTasks = observer(() => {
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedLine, setSelectedLine] = useState(null);

    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={taskStore.tasks.filter(task => task.isCompleted === true)}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({ item }) =>
                    <TodoReadonlyListItem data={item} onClick={(data) => {
                        setSelectedLine(data);
                        setShowViewModal(true);
                    }}></TodoReadonlyListItem>}
            />
            <Todo data={selectedLine} showModal={showViewModal} onClose={() => { setShowViewModal(false) }}></Todo>
        </SafeAreaView>
    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});