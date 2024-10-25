import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Contact from "./pages/Contact/Contact.tsx"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/contact",
        element : <Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
