import { User } from "@/interfaces/user.interface";
import { apiClient } from "@/libs/api-client.lib";
import { API_ROUTES, USERS } from "@/app/constants/routes";

export async function getCurrentUser(): Promise<User> {
  return apiClient<User>(`${API_ROUTES.USERS}/${USERS.DATA}`);
}
