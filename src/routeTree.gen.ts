/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthUserImport } from './routes/_auth/user'
import { Route as AuthProfileImport } from './routes/_auth/profile'
import { Route as outsideLoginPostsImport } from './routes/(outsideLogin)/posts'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthUserRoute = AuthUserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => AuthRoute,
} as any)

const AuthProfileRoute = AuthProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthRoute,
} as any)

const outsideLoginPostsRoute = outsideLoginPostsImport.update({
  id: '/(outsideLogin)/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/(outsideLogin)/posts': {
      id: '/(outsideLogin)/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof outsideLoginPostsImport
      parentRoute: typeof rootRoute
    }
    '/_auth/profile': {
      id: '/_auth/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthProfileImport
      parentRoute: typeof AuthImport
    }
    '/_auth/user': {
      id: '/_auth/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof AuthUserImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthProfileRoute: typeof AuthProfileRoute
  AuthUserRoute: typeof AuthUserRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthProfileRoute: AuthProfileRoute,
  AuthUserRoute: AuthUserRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/posts': typeof outsideLoginPostsRoute
  '/profile': typeof AuthProfileRoute
  '/user': typeof AuthUserRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/posts': typeof outsideLoginPostsRoute
  '/profile': typeof AuthProfileRoute
  '/user': typeof AuthUserRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/(outsideLogin)/posts': typeof outsideLoginPostsRoute
  '/_auth/profile': typeof AuthProfileRoute
  '/_auth/user': typeof AuthUserRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/login' | '/posts' | '/profile' | '/user'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/posts' | '/profile' | '/user'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/login'
    | '/(outsideLogin)/posts'
    | '/_auth/profile'
    | '/_auth/user'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  LoginRoute: typeof LoginRoute
  outsideLoginPostsRoute: typeof outsideLoginPostsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  LoginRoute: LoginRoute,
  outsideLoginPostsRoute: outsideLoginPostsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/login",
        "/(outsideLogin)/posts"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/profile",
        "/_auth/user"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/(outsideLogin)/posts": {
      "filePath": "(outsideLogin)/posts.tsx"
    },
    "/_auth/profile": {
      "filePath": "_auth/profile.tsx",
      "parent": "/_auth"
    },
    "/_auth/user": {
      "filePath": "_auth/user.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
