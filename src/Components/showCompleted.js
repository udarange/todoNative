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
import TodoActions from "../Actions/actions";

function TodosList({todos, completedCount}) {

    return (
        <div>
            <h3>Completed List: <font color="red">{completedCount}</font> items</h3>

            <ul>
                {todos.map((t) => {
                    if (t.isDone) {
                        return <li key={t.id}>
                            <button onClick={() => TodoActions.deleteTodo(t.id)}>Delete</button>
                            <span> {t.text}</span>
                        </li>
                    }
                })}
            </ul>
        </div>
    )
}

export default function () {
    return <AltContainer
        stores={[TodoStore]}
        inject={{
            todos: () => TodoStore.getState().todos,
            completedCount: () => TodoStore.getState().completedItem
        }}
    >
        <TodosList/>
    </AltContainer>
}
