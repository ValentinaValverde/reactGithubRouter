import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {
  loader as rootLoader,
} from './routes/root'
import './index.css'
import Error from './routes/error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    errorElement: <Error />,
    // children: [
    //   {
    //      path: '',
    //      element: < />,
    //      loader: 
    //   }
    // ]
    //there are 30 issues listed, do I have to make 30 children???
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);