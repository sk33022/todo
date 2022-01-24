import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { TodoListContext } from '../Contexts/TodoListContext';





  const TodoList = () => {
  const {todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

const[todo, setTodo]  = useState(''); 
const handleChange = (e) => {
  // console.log(e.target.value);
  setTodo(e.target.value);
}
 const handleFormSubmit = (e) => {
   e.preventDefault();
   dispatch({type: 'ADD_TODO', text: todo});
 }
 const handleRemoveTodo = (e) => {
   const id = e.target.id;
   dispatch({type: 'REMOVE_TODO', id});
 }
  return (
    <div style={{ background: theme.background, color: theme.text,  textAlign:'center'}} >
       {todos.length ? (
         todos.map((todo) => {
          return <p className='item' key= {todo.id} id={todo.id} onClick={handleRemoveTodo} > {todo.text} </p>
         })
       ): (
         <div> you have no todos </div>
       )

       }     
    <form onSubmit={handleFormSubmit} >
      <label htmlFor='todo'>Add todo:</label>
      <input type='text' id='todo' onChange={handleChange} />
      <input type='submit' value='Add Todo' className='ui button primary'/>
    </form>
    <button className='ui button primary' onClick={changeTheme}>change theme</button>
    </div>
  );
};
export default TodoList;