"use server";

import { User, UserAuth0Info, UserIdentity, UserPreference, UserProfile } from "@/interfaces/user.interface";
import {
  deleteCurrentUser,
  getCurrentUser,
  getCurrentUserIdentities,
  getCurrentUserInfoData,
  getCurrentUserPreference,
  getCurrentUserProfile,
  requestClearDeleteForCurrentUser,
} from "@/libs/user.lib";

export async function getCurrentUserAction(): Promise<User> {
  return await getCurrentUser();
}

export async function getCurrentUserInfoDataAction(): Promise<UserAuth0Info> {
  return await getCurrentUserInfoData();
}

export async function getCurrentUserProfileAction(): Promise<UserProfile> {
  return await getCurrentUserProfile();
}

export async function getCurrentUserPreferencesAction(): Promise<UserPreference> {
  return await getCurrentUserPreference();
}

export async function getCurrentUserIdentitiesAction(): Promise<UserIdentity[]> {
  return await getCurrentUserIdentities();
}

export async function deleteCurrentUserAction() {
  await deleteCurrentUser();
}

export async function requestClearDeleteForCurrentUserAction() {
  await requestClearDeleteForCurrentUser();
}
