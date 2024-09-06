import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Users from './pages/Users.jsx'
import Profile from './pages/Profile.jsx'
import { Dataprovider } from './context/Dataprovider.jsx'
import UserForm from './pages/UserForm.jsx'
import EditForm from './pages/EditForm.jsx'
import DetailedProfile from './pages/DetailProfile.jsx'
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/users',
    element:<Users/>
  },
  {
    path:'/profile/:userId',
    element:<Profile/>
  },
  {
    path:'/newuser',
    element:<UserForm/>
  },
  {
    path:'/edit/:userId',
    element:<EditForm/>
  },
  {
    path:'/profiledetails/:userId',
    element:<DetailedProfile/>
  },
  {
    path:'/',
    element:<Home/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dataprovider>
      <RouterProvider router={router}/>
    </Dataprovider>
  </StrictMode>,
)
