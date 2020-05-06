import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You don't have any more todo</p>
    );

    return (
        <div>
            <div className="collection-header center blue-text"><strong>TODO LIST</strong></div>   
            <div className="collection">
                {TodoList}
            </div>
        </div>
    );

}

export default Todos;