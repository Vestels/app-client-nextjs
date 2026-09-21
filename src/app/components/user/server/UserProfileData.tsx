import { API_ROUTES, USERS } from "@/app/constants/routes";
import { UserProfile } from "@/interfaces/user.interface";
import { apiClient } from "@/libs/api-client.lib";
import ErrorStatus from "@/app/components/status/ErrorStatus";
import UserProfileForm from "@/app/components/user/client/UserProfileForm";

export default async function UserProfileData() {
  let UserProfile: UserProfile;

  try {
    UserProfile = await apiClient<UserProfile>(`${API_ROUTES.USERS}/${USERS.PROFILE}`);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return <UserProfileForm initialPreferences={UserProfile} />;
}
