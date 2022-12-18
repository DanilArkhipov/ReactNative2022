import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView } from 'react-native';
import AddTodo from '../components/addTodo';
import Todo from '../components/todo';
import TodoEditableListItem from '../components/todoEditableListItem';
import { TodoData } from '../models/todoData';
import TaskStore from '../data/taskStore';
import LogStore from '../data/logStore';
import { OperationType } from '../models/operationType';

export const Tasks = observer(() => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedLine, setSelectedLine] = useState(null);


    const removeTodo = (todo: TodoData) => {
        TaskStore.deleteTask(todo);
        LogStore.addLog(OperationType.DeleteTask, todo)
    }

    const completeTask = (task: TodoData) => {
        TaskStore.completeTask(task);
        LogStore.addLog(OperationType.CompleteTask, task)
    }
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={TaskStore.tasks.filter(task => task.isCompleted === false)}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({ item }) =>
                    <TodoEditableListItem data={item} onClick={(data) => {
                        setSelectedLine(data);
                        setShowViewModal(true);
                    }} onDelete={removeTodo} onComplete={completeTask}></TodoEditableListItem>}
            />
            <TouchableOpacity onPress={() => { setShowAddModal(true) }} style={{ backgroundColor: '#D3D3D3', margin: 5, marginBottom: 10, borderRadius: 5 }}>
                <Text style={{ fontSize: 14, textAlign: "center", textAlignVertical: 'center', padding: 5, textTransform: 'uppercase' }}>Добавить задачу</Text>
            </TouchableOpacity>
            <AddTodo onSave={(data) => { TaskStore.addNewTask(data); LogStore.addLog(OperationType.AddTask, data) }} showModal={showAddModal} onClose={() => { setShowAddModal(false) }}></AddTodo>
            <Todo data={selectedLine} showModal={showViewModal} onClose={() => { setShowViewModal(false) }}></Todo>
        </SafeAreaView>
    );
}
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    todoLine: {

    },
    todoLineTouch: {

    },
    textInput: {

    }
});