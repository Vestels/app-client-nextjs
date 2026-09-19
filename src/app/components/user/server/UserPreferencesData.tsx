import { UserPreference } from "@/interfaces/user.interface";
import ErrorStatus from "../../status/ErrorStatus";
import { apiClient } from "@/lib/api-client.lib";
import { USERS } from "@/app/constants/routes";
import UserPreferencesForm from "../client/UserPreferencesForm";

export default async function UserPreferencesData() {
  let userPreferences: UserPreference;

  try {
    userPreferences = await apiClient<UserPreference>(USERS.PREFERENCES);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return <UserPreferencesForm initialPreferences={userPreferences} />;
}
