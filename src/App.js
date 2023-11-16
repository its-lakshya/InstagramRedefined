import './App.css';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Store from './store/Store';
import Signin from './pages/Signin';
import Login from './pages/Login';

const AppLayout = () => {
  return (
    <div className=" h-screen w-full">
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"signin",
        element:<Signin/>
      },
      

    ]
  }
])

const App = () => {
  return (
    <Provider store={Store}>
      <RouterProvider router ={appRouter}/>
    </Provider>
  )
}

export default App;
