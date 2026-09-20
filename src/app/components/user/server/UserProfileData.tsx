import { ROUTES, USERS } from "@/app/constants/routes";
import { UserProfile } from "@/interfaces/user.interface";
import { apiClient } from "@/lib/api-client.lib";
import ErrorStatus from "../../status/ErrorStatus";
import UserProfileForm from "../client/UserProfileForm";

export default async function UserProfileData() {
  let UserProfile: UserProfile;

  try {
    UserProfile = await apiClient<UserProfile>(`${ROUTES.USERS}/${USERS.PROFILE}`);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return <UserProfileForm initialPreferences={UserProfile} />;
}
