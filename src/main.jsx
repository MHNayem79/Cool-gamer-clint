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
import UpdateReview from './Components/UpdateReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errortext></Errortext>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://chill-gamer-server-tawny.vercel.app/highest")
      },
      {
        path: 'allReviews',
        element: <AllReviews></AllReviews>,
        loader: () => fetch("https://chill-gamer-server-tawny.vercel.app/addReview")
      },
      {
        path: 'addReview',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: 'myReviews/:email',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chill-gamer-server-tawny.vercel.app/myReviews/${params.email}`)
      },
      {
        path: 'updateReview/:id',
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chill-gamer-server-tawny.vercel.app/updateReview/${params.id}`)
      },
      {
        path: '/gameWishList/:userEmail',
        element: <PrivateRoute><GameWishList></GameWishList></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chill-gamer-server-tawny.vercel.app/gameWishList/${params.userEmail}`)
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
        loader: ({ params }) => fetch(`https://chill-gamer-server-tawny.vercel.app/review/${params.id}`)
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
