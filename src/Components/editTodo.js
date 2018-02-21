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
import TodoActions from "../Actions/actions";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


export default class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
            previousVal: this.props.text,
            id: this.props.id,
            isEditable: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.edittodo = this.edittodo.bind(this);
    }

    handleChange= (text) => {
        this.setState({value: text})
    };

    handleSubmit() {
        TodoActions.updateTodo(this.state.id, this.state.value)
        this.edittodo();
    }

    handleCancel() {
        this.setState({
            value: this.state.previousVal
        });
        this.edittodo();
    }

    edittodo() {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }

    render() {
        if (this.state.isEditable) {
            return (
                <View style={{
                    flexDirection: 'row',
                    margin: 2,
                    height: 35
                }}>
                    <Button
                        onPress={e => this.handleSubmit()}
                        title="Save"
                        color="red"/>
                    <Button
                        onPress={e => this.handleCancel()}
                        title="Cancel"
                        color="lightblue"/>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               value={this.state.value}
                               autoCapitalize="none"
                               onChangeText={this.handleChange}/>
                </View>
            )
        } else {
            return (
                <View style={{
                    flexDirection: 'row',
                    margin: 2,
                    height: 35
                }}>
                    <Button
                        onPress={() => TodoActions.toggleTodo(this.state.id)}
                        title="Done"
                        color="green"/>
                    <Button
                        onPress={e => this.edittodo()}
                        title="___Edit"
                        color="orange"/>
                    <Text style={styles.textTodo}>
                        {this.state.value}
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    textTodo: {
        fontSize: 18,
        margin: 5,
        color: 'gray'
    },
    input: {
        height: 35,
        width: 'auto',
        borderColor: 'green',
        borderWidth: 2
    },
});
