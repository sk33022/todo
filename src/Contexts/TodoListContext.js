import React, { createContext, useReducer } from 'react';
import { todoReducer } from '../Reducers/todosReducer';

export const TodoListContext = createContext();


export const TodoListContextProvider = ({ children }) => {
   const [todos, dispatch] = useReducer(todoReducer,[
        {text: 'Do assignment', id: 1},
        {text: 'forward assignment', id: 2},
        {text: 'submit assigmnrt', id: 3},
    ]);
   
    // const addTodo = (todo) => {
    //         setTodos([
    //             ...todos,
    //             { text: todo, id: Math.random() }  //use uuid npm package for assiging id
    //         ])
    // }

    // const removeTodo = (id) => {
    //         setTodos(todos.filter((todo) => {
    //             return todo.id !== Number(id); //str to num
                
    //         }));
    // };
  return <div>
      <TodoListContext.Provider value={{ todos, dispatch }} >
            {children}
        </TodoListContext.Provider>
  </div>;
};
export default TodoListContextProvider;