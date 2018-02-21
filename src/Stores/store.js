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
 * Created by archana on 2/12/18.
 */
'use strict';
import alt from "../alt";
import TodoAction from "../Actions/actions";

class TodoStore {
    constructor() {
        this.todos = [];
        this.nextTodoId = 3;
        this.completedItem = 0;

        /* Dummy Data */
        this.todos.push({
            id: 0,
            isDone: false,
            text: "task01"
        });
        this.todos.push({
            id: 1,
            isDone: false,
            text: "task02"
        });
        this.todos.push({
            id: 2,
            isDone: false,
            text: "task03"
        });

        this.bindListeners({
            handleAddTodo: TodoAction.ADD_NEW_TODO,
            handleToggleTodo: TodoAction.TOGGLE_TODO,
            handleUpdateTodo: TodoAction.UPDATE_TODO,
            handleDeleteTodo: TodoAction.DELETE_TODO
        });
    }


    handleAddTodo(task) {
        this.todos.push({
            id: this.nextTodoId++,
            isDone: false,
            text: task
        })
    }

    handleToggleTodo(id) {
        // console.log("STORE ---> toggle")

        this.todos.map(t => {
            if (t.id === id) {
                if (!t.isDone) {     /*if previous state is false*/
                    this.completedItem++;
                } else {
                    this.completedItem--;
                }
                t.isDone = !t.isDone;
            }
        });
    }

    handleUpdateTodo(parameters) {
        // console.log("STORE ---> Update");

        this.todos.map(t => {
            if (t.id === parameters.id) {
                t.text = parameters.text;
            }
        });
    }

    handleDeleteTodo(id) {
        // console.log("STORE ---> delete")
        this.todos = this.todos.filter(t => t.id !== id)
        this.completedItem--;
    }
}

export default alt.createStore(TodoStore)