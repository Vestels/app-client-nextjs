import { Suspense } from "react";
import UserData from "../server/UserData";
import UserProfileData from "../server/UserProfileData";
import SpinnerSvg from "../../svgs/SpinnerSvg";
import UserIdentitiesData from "../server/UserIdentitiesData";
import UserPreferencesData from "../server/UserPreferencesData";

export default async function UserProfileClient() {
  return (
    <>
      <h1>Profil</h1>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">Személyes</h2>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserProfileData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">Preferenciák</h2>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserPreferencesData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">Bejelentkezési módok</h2>
      <hr className="divider" />

      <div className="user-data-table user-data-table--identities">
        <Suspense fallback={<SpinnerSvg />}>
          <UserIdentitiesData />
        </Suspense>
      </div>
    </>
  );
}
