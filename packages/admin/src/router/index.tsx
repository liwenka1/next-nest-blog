import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import { BasicLayout } from '@/components'
import { VITE_BASE_URL } from '@/config/env'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: lazyLoad(lazy(() => import('@/pages/login')))
  },
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(lazy(() => import('@/pages/home')))
      },
      {
        path: 'about',
        element: lazyLoad(lazy(() => import('@/pages/about')))
      }
    ]
  }
]

const browserRouter = createBrowserRouter(routes, {
  basename: VITE_BASE_URL
})

export default browserRouter
