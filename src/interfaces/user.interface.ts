import { Gender, Theme, UnitSystem, UserStatus } from "@/enums/user.enum";

export interface User {
  email: string;
  userStatus: UserStatus;
  createdAt: string;
  lastLoginAt: string;
  lastActivityAt: string;
  updatedAt: string;
  deletionRequestAt: string | null;
  scheduledDeletionAt: string | null;
}

export interface UserAuth0Info {
  picture: string;
  emailVerified: boolean;
}

export interface UserProfile {
  birthDate: string;
  nickname: string;
  firstName: string;
  lastName: string;
  gender: Gender;
}

export interface UserPreference {
  language: string;
  unitSystem: UnitSystem;
  theme: Theme;
  timezone: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface UserIdentity {
  provider: string;
  createdAt: string;
  lastUsedAt: string;
}
