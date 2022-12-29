import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Pages/Home';
import AddTask from './Pages/AddTask';
import MyTask from './Pages/MyTask';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/addTask',
          element: <AddTask></AddTask>
        },
        {
          path:'/myTask',
          element: <MyTask></MyTask>
        },
      ]
    }, 
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
       
    </div>
  );
}

export default App;
