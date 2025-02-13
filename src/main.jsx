import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home.jsx';
import AllReviews from './Components/AllReviews.jsx';
import AddReview from './Components/AddReview.jsx';
import MyReviews from './Components/MyReviews.jsx';
import GameWishList from './Components/GameWishList.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Details from './Components/Details.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Errortext from './Components/Errortext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errortext></Errortext>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/highest")
      },
      {
        path: 'allReviews',
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:5000/addReview")
      },
      {
        path: 'addReview',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: 'myReviews/:email',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/myReviews/${params.email}`)
      },
      {
        path: '/gameWishList/:userEmail',
        element: <PrivateRoute><GameWishList></GameWishList></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/gameWishList/${params.userEmail}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'review/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
