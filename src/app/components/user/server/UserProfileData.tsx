import { UserProfile } from "@/interfaces/user.interface";
import UserProfileForm from "@/app/components/user/client/UserProfileForm";
import { getCurrentUserProfileAction } from "@/actions/user.actions";

export default async function UserProfileData() {
  const UserProfile: UserProfile = await getCurrentUserProfileAction();

  return <UserProfileForm initialPreferences={UserProfile} />;
}
