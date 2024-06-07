import { lazy } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import { DashboardLayout, ProgressBarWrapper } from '@/components'
import { VITE_BASE_URL } from '@/config/env'

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/auth" replace />
      }
    ]
  },
  {
    path: 'auth',
    element: (
      <ProgressBarWrapper>
        <Outlet />
      </ProgressBarWrapper>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />
      },
      {
        path: 'login',
        element: lazyLoad(lazy(() => import('@/pages/login')))
      },
      {
        path: 'register',
        element: lazyLoad(lazy(() => import('@/pages/register')))
      },
      {
        path: 'forgot-password',
        element: lazyLoad(lazy(() => import('@/pages/forgot-password')))
      }
    ]
  },
  {
    path: 'dashboard',
    element: (
      <ProgressBarWrapper>
        <DashboardLayout />
      </ProgressBarWrapper>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/home" replace />
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
