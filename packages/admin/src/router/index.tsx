import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(() => lazy(() => import('@/pages/home')))
      },
      {
        path: 'about',
        element: lazyLoad(() => lazy(() => import('@/pages/about')))
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  basename: '/'
})
