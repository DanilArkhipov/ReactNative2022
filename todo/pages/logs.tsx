import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList, SafeAreaView } from 'react-native';
import AddTodo from '../components/addTodo';
import Todo from '../components/todo';
import TodoReadonlyListItem from '../components/todoReadOnlyListItem';
import { observer } from 'mobx-react-lite';
import taskStore from '../data/taskStore';
import Log from '../components/log';
import LogStore from '../data/logStore';


export const Logs = observer(() => {
    console.log(LogStore.logs)
    const keyExtractor = (index) => {
        return index.toString();
    };
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={LogStore.logs}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({ item }) =>
                    <Log data={item}></Log>}
            />
        </SafeAreaView>
    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});