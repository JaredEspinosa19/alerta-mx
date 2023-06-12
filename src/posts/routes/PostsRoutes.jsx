import { NavBar } from '../components'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, UserData, PostPage } from '../pages'
import { useEffect } from 'react'
import { usePostsStore } from '../../hooks'

export const PostsRoutes = () => {

  const {startLoadingPosts} = usePostsStore();

  useEffect(() => {
    startLoadingPosts();
  }, []);
  
  return (
    <>
      <NavBar />
      <Routes>

        <Route path='home' element={<HomePage />} />
        <Route path='publicar' element={<PostPage />} />
        <Route path='datosUsuario' element={<UserData />} />

        <Route path='/*' element={<Navigate to={'/home'} />} />
      
      </Routes>
    </>
  )
}
