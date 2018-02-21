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
 * Created by archana on 2/9/18.
 */

import React from "react";
import TodoActions from "../Actions/actions";
// import {Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class AddTodoList extends React.Component {
    state = {
        newTodo: ''
    };
    handleNewTodo = (text) => {
        this.setState({newTodo: text})
    };

    submitTodo = (text) => {
        if (text.length!==0) {
            TodoActions.addNewTodo(text)
            this._textInput.setNativeProps({text: ''});
            this.setState({newTodo: ''})
        }else {
            alert('Empty String')
        }
    };

    render() {
        return (
            <View style={{
                flexDirection: 'row',
            }}>
                <TextInput style={styles.input}
                           ref={component => this._textInput = component}
                           underlineColorAndroid="transparent"
                           placeholder="Add Todo"
                           placeholderTextColor="#bcbcbc"
                           autoCapitalize="none"
                           onChangeText={this.handleNewTodo}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.submitTodo(this.state.newTodo)
                    }>
                    <Text style={styles.submitButtonText}> Add </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 280,
        borderColor: '#f46200',
        borderWidth: 2
    },
    submitButton: {
        backgroundColor: '#f46200',
        padding: 10,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})