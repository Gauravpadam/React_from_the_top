// I will be creating a browser router here,
// I have my outlet in App.jsx
// And everytime App will be rendered, outlet will be rendered along with it
// App is set to '/' as well as home is set to '/'
// AuthLayout.jsx decides whether the redirect goes to an element or the login page
// Check AuthLayout.jsx for further details



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AllPosts from './pages/Allposts.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './components/AuthLayout/index.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import EditPost from './pages/EditPost.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: (
            <AuthLayout authentication={false}> {/* Meaning the login page needs no authentication to be accessed */}
              <LoginPage />
            </AuthLayout>
          )
        },
        {
          path: '/signup',
          element: (
            <AuthLayout authentication={false}>
              <SignUpPage />
            </AuthLayout>
          )
        },
        {
          path: '/all-posts',
          element: (
            <AuthLayout authentication>
              <AllPosts />
            </AuthLayout>
          )
        },
        {
          path: '/edit-post/:slug',
          element: (
            <AuthLayout authentication>
              <EditPost />
            </AuthLayout>
          )
        },
        {
          path: '/add-post',
          element: (
            <AuthLayout authentication={true}>
              <AddPost />
            </AuthLayout>
          )
        },
        {
          path: '/post/:slug',
          element: <Post />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
