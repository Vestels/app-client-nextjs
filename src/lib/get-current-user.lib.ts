import { User } from "@/interfaces/user.interface";
import { apiClient } from "./api-client.lib";
import { USERS } from "@/app/constants/routes";

export async function getCurrentUser(): Promise<User> {
  return apiClient<User>(USERS.DATA);
}
