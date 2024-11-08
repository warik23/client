
import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { AddTodo } from "./components/AddTodo";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Header />
        {isLoggedIn ?

          <>
            <AddTodo />
            <TodoList />
            <Logout setIsLoggedIn={setIsLoggedIn} />
          </>

          :
          <Login setIsLoggedIn={setIsLoggedIn} />}
      </div>
    </QueryClientProvider>



  )
}

export default App
