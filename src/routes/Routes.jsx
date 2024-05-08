import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/News/News/News';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/categorie/0'></Navigate>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },

  {
    path: '/categorie',
    element: <Main></Main>,
    children: [
      // {
      //   path: '/',
      //   element: <Category></Category>,
      //   loader : () => fetch(`https://the-dragon-news-server-rl5985mu9-afridi-hasans-projects.vercel.app/news`)
      // },
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-dragon-news-server-ofsy.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://the-dragon-news-server-ofsy.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
