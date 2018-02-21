
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

'use strict';

import alt from "../alt";

class TodoActions {
    addNewTodo(text) {
        // alert('newTodo: ' + text)
        // console.log("ACTION ---> addNewTodo")
        return text;
    }

    toggleTodo(id) {
        // console.log("ACTION ---> toggleTodo "+ id)
        return id;
    }

    updateTodo(id, text) {
        // console.log("ACTION ---> updateTodo " + text + " " + id)
        return {text, id};
    }

    deleteTodo(id) {
        // console.log("ACTION ---> deleteTodo "+ id)
        return id;
    }
}
export default alt.createActions(TodoActions);
