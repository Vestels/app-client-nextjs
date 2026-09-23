import { User } from "@/interfaces/user.interface";
import { apiClient, ApiError } from "@/libs/api-client.lib";
import { API_ROUTES, AUTH_ROUTES } from "@/app/constants/routes";
import { redirect } from "next/navigation";

export async function getCurrentUser(): Promise<User> {
  try {
    return await apiClient<User>(`${API_ROUTES.USERS.USERS}/${API_ROUTES.USERS.DATA}`);
  } catch (error) {
    if (error instanceof ApiError && [401, 410].includes(error.status)) {
      redirect(`/${AUTH_ROUTES.LOGOUT}`);
    }
    throw error;
  }
}
