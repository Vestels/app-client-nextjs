import { UserPreference } from "@/interfaces/user.interface";
import { apiClient } from "@/lib/api-client.lib";
import { ROUTES, USERS } from "@/app/constants/routes";
import UserPreferencesForm from "@/app/components/user/client/UserPreferencesForm";
import ErrorStatus from "@/app/components/status/ErrorStatus";

export default async function UserPreferencesData() {
  let userPreferences: UserPreference;

  try {
    userPreferences = await apiClient<UserPreference>(`${ROUTES.USERS}/${USERS.PREFERENCES}`);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return <UserPreferencesForm initialPreferences={userPreferences} />;
}
