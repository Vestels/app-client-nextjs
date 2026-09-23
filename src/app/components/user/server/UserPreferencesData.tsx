import { UserPreference } from "@/interfaces/user.interface";
import { apiClient } from "@/libs/api-client.lib";
import { API_ROUTES } from "@/app/constants/routes";
import UserPreferencesForm from "@/app/components/user/client/UserPreferencesForm";

export default async function UserPreferencesData() {
  const userPreferences: UserPreference = await apiClient<UserPreference>(
    `${API_ROUTES.USERS.USERS}/${API_ROUTES.USERS.PREFERENCES}`,
  );

  return <UserPreferencesForm initialPreferences={userPreferences} />;
}
