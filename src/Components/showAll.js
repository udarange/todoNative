/*
 * (C) Copyright 2010-2018 hSenid Mobile Solutions (Pvt) Limited.
 * All Rights Reserved.
 *
 * These materials are unpublished, proprietary, confidential source code of
 * hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 * of hSenid Mobile Solutions (Pvt) Limited.
 *
 * hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 * property rights in these materials.
 */

/**
 * Created by archana on 2/16/18.
 */

import React from "react";
import AltContainer from "alt-container";
import TodoStore from "../Stores/store";
import EditTodo from "./editTodo";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import TodoActions from "../Actions/actions";

export function Todo({isDone, text, id}) {
    if (isDone) {
        return (
            <View style={{
                flexDirection: 'row',
                margin: 2,
                height: 35
            }}>
                <Button
                    onPress={() => TodoActions.toggleTodo(id)}
                    title="Undo"
                    color="lightgreen"/>
                <Button
                    onPress={() => TodoActions.deleteTodo(id)}
                    title="Delete"
                    color="red"/>
                <Text style={styles.textTodoDone}>
                    {text}
                </Text>
            </View>
        )
    } else {
        return (
            <EditTodo id={id} isDone={isDone} text={text}/>
        )
    }
}

function TodosList({todos}) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <Text style={styles.listheder}>
                Show All List: {todos.length} items
            </Text>

            {todos.map((t) => (
                <View key={t.id}><Todo id={t.id} isDone={t.isDone} text={t.text}/></View>
            ))}
        </View>
    )
}

export default function () {
    return <AltContainer
        stores={[TodoStore]}
        inject={{
            todos: () => TodoStore.getState().todos
        }}
    >
        <TodosList/>
    </AltContainer>
}

const styles = StyleSheet.create({
    listheder: {
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
        // color:'black'
    },
    textTodo: {
        fontSize: 18,
        margin: 5,
        color: 'gray'
    },
    textTodoDone: {
        fontSize: 18,
        margin: 5,
        color: 'red'
    },
});
