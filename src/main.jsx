import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/Sobre.jsx'
import Blog from './pages/Blog.jsx'
import Contatos from './pages/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import Marketplace from './pages/Marketplace.jsx'
import PaginaFilme from './pages/PaginaFilme.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "sobre", element: <Filmes/>},
        {path: "filmes/:id", element: <PaginaFilme/>},
        {path: "blog", element: <Blog/>},
        {path: "contatos", element: <Contatos/>},
        {path: "marketplace", element: <Marketplace/>},
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
