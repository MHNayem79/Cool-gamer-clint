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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allReviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: 'addReview',
        element: <AddReview></AddReview>
      },
      {
        path: 'myReviews',
        element: <MyReviews></MyReviews>
      },
      {
        path: 'gameWishList',
        element: <GameWishList></GameWishList>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
