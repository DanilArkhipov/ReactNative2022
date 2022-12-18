import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView } from 'react-native';
import AddTodo from '../components/addTodo';
import Todo from '../components/todo';
import TodoEditableListItem from '../components/todoEditableListItem';
import { TodoData } from '../models/todoData';
import { newTasks, completedTasks } from '../data/tasks';

export default function Tasks(data: { updateLists: boolean, setUpdateLists: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedLine, setSelectedLine] = useState(null);
    const [todos, setTodos] = useState(newTasks);
    const removeTodo = (todo: TodoData) => {
        const index = todos.indexOf(todo, 0);
        if (index > -1) {
            todos.splice(index, 1);
            setTodos(todos);
            data.setUpdateLists(!data.updateLists)
            const staticIndex = newTasks.indexOf(todo, 0);
            if (staticIndex > -1) {
                newTasks.slice(staticIndex, 1);
            }
        }
    }

    const completeTask = (task: TodoData) => {
        removeTodo(task);
        task.isCompleted = true;
        completedTasks.push(task);
        setTodos(todos);
        data.setUpdateLists(!data.updateLists)
    }
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                extraData={data.updateLists}
                data={todos}
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
            <AddTodo onSave={(data) => { todos.push(data) }} showModal={showAddModal} onClose={() => { setShowAddModal(false) }}></AddTodo>
            <Todo data={selectedLine} showModal={showViewModal} onClose={() => { setShowViewModal(false) }}></Todo>
        </SafeAreaView>
    );
}


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