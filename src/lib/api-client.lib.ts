import { auth0 } from "@/lib/auth0.lib";

export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const { token } = await auth0.getAccessToken();

  const response = await fetch(`${process.env.NEXT_API_GATEWAY_URL}/${endpoint}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}
