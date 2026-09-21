export const APP_ROUTES = {
  HOME: "/",
  PROFILE: "profile",
} as const;

export const AUTH_ROUTES = {
  BASE: "auth",
  LOGIN: "auth/login",
  LOGOUT: "auth/logout",
} as const;

export const API_ROUTES = {
  USERS: "users",
  PROFILE: "profile",
} as const;

export const USERS = {
  DATA: "me",
  INFO: "info",
  PROFILE: "profile",
  PREFERENCES: "preferences",
  IDENTITIES: "identities",
} as const;
