import React from 'react';
import ReactDOM from 'react-dom/client';
import  { route } from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}> 
    <RouterProvider router={route}/>

      </Provider>

  </>
);


