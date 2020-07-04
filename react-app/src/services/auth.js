import * as React from 'react';
import { useContext } from 'react';

import auth0 from "auth0-js";

import { Redirect } from 'react-router-dom';
import store from '../apollo-client'
import { useSubscriptions } from './cache.service'

const isBrowser = typeof window !== "undefined";

// const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
// const AUTH0_CLIENTID = process.env.AUTH0_CLIENTID;
// const AUTH0_CALLBACK = process.env.AUTH0_CALLBACK;

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: 'beingtmk.auth0.com',
      clientID: 'yCsbWViqZ5A73x202B4KOjDuxyJUV7br',
      redirectUri: 'http://localhost:3000/callback',
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

// const auth = isBrowser
// ? new auth0.WebAuth({
//     domain: AUTH0_DOMAIN,
//     clientID: AUTH0_CLIENTID,
//     redirectUri: AUTH0_CALLBACK,
//     responseType: "token id_token",
//     scope: "openid profile email",
//   })
// : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem('Authorization') || null
}

export const signIn = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    // cb()
    console.log(err);
    return <Redirect to="/sign-in" />;
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    user.idToken = authResult.idToken
    localStorage.setItem('Authorization', 'Bearer '+user.idToken)
    localStorage.setItem('userId', user.sub)

    cb()
  }
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = (cb) => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession(cb))
}

export const getProfile = () => {
  const userId = localStorage.getItem('userId');
  return {id:userId}
}

export const signOut = () => {
  localStorage.removeItem('Authorization')

  store.clearStore()
  auth.logout()
}


const MyContext = React.createContext(null)
export const useMe = () => {
  return useContext(MyContext)
}

export const withAuth = (Component) => {
  return props => {
    if (!isAuthenticated()) return <Redirect to="/sign-in" />

    // Validating against server
    const myResult = getProfile();
    useSubscriptions(myResult)

    return (
      <MyContext.Provider value={myResult}>
        <Component {...props} />
      </MyContext.Provider>
    )
  }
}

export const getAuthHeader = () => {
  return localStorage.getItem('Authorization') || null
}

export default {
  useMe,
  withAuth,
  getAuthHeader,

  getProfile,
  isAuthenticated,
  signIn,
  signOut,
}
