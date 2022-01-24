
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import AuthContextProvider from './Contexts/AuthContext';
import ThemeContextProvider from './Contexts/ThemeContext';
import { TodoListContextProvider } from './Contexts/TodoListContext';

function App() {
  return (
    <div className='App'>
     <div className='ui raised very padded text container segment'>
        <TodoListContextProvider>
        <ThemeContextProvider >
          <AuthContextProvider>
            <Navbar />
            <TodoList />
          </AuthContextProvider>
        </ThemeContextProvider>
       </TodoListContextProvider>
     </div>
    </div>
  );
}

export default App;
