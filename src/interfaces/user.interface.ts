import { Gender, Theme, UnitSystem, UserStatus } from "@/enums/user.enum";

export interface User {
  publicId: string;
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
  userId: string;
  birthDate: string;
  nickname: string;
  firstName: string;
  lastName: string;
  gender: Gender;
}

export interface UserPreference {
  userId: string;
  language: string;
  unitSystem: UnitSystem;
  theme: Theme;
  timezone: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface UserIdentity {
  userId: string;
  provider: string;
  subject: string;
  createdAt: string;
  lastUsedAt: string;
}
