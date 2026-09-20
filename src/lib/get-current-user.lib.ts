import { User } from "@/interfaces/user.interface";
import { apiClient } from "@/lib/api-client.lib";
import { ROUTES, USERS } from "@/app/constants/routes";

export async function getCurrentUser(): Promise<User> {
  return apiClient<User>(`${ROUTES.USERS}/${USERS.DATA}`);
}
