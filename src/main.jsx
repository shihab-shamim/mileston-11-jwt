import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';



createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
 </div>
)
