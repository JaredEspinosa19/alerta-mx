import { Navigate, Route, Routes } from 'react-router-dom';
import { PostsRoutes } from '../posts/routes/PostsRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { LoadingSpinner } from '../posts/components';
import { getEnvVariables } from '../helpers';

export const AppRouter = () => {
  
  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  // console.log(getEnvVariables())
  // getEnvVariables()
  
  if (status === 'checking') {
    return (
      <LoadingSpinner />
    )
  }
  
  // const status = 'authenticated';
  return (

    <Routes>
      {
        (status === 'not-authenticated')
        ? <Route path='/auth/*' element={<AuthRoutes />}/>
        : <Route path='/*' element={<PostsRoutes />}/>
        
      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />
      {/* <Route path='/*' element={<Navigate to='/auth/login' />} /> */}

    </Routes>
  )
}
