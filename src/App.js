import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Router/Route';

function App() {
  return (
    <div className=' m-0 p-0'>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
