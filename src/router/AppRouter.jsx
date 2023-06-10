import { Navigate, Route, Routes } from 'react-router-dom';
import { PostsRoutes } from '../posts/routes/PostsRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { LoadingSpinner } from '../posts/components';


export const AppRouter = () => {
  
  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return (
      <LoadingSpinner />
    )
  }

  return (

    <Routes>
      {
        (status === 'not-authenticated')
        ? <Route path='/auth/*' element={<AuthRoutes />}/>
        : <Route path='/*' element={<PostsRoutes />}/>
        
      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />

    </Routes>
  )
}
