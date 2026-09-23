import { API_ROUTES } from "@/app/constants/routes";
import { UserProfile } from "@/interfaces/user.interface";
import { apiClient } from "@/libs/api-client.lib";
import UserProfileForm from "@/app/components/user/client/UserProfileForm";

export default async function UserProfileData() {
  const UserProfile: UserProfile = await apiClient<UserProfile>(
    `${API_ROUTES.USERS.USERS}/${API_ROUTES.USERS.PROFILE}`,
  );

  return <UserProfileForm initialPreferences={UserProfile} />;
}
