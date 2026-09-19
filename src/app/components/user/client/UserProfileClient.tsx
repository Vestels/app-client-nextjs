import { Suspense } from "react";
import UserData from "../server/UserData";
import UserProfileData from "../server/UserProfileData";
import SpinnerSvg from "../../svgs/SpinnerSvg";
import UserIdentitiesData from "../server/UserIdentitiesData";
import UserPreferencesData from "../server/UserPreferencesData";
import { getTranslations } from "next-intl/server";

export default async function UserProfileClient() {
  const translate = await getTranslations("APP.PROFILE");

  return (
    <>
      <h1>{translate("TITLE")}</h1>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">{translate("PERSONAL.TITLE")}</h2>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserProfileData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">{translate("PREFERENCES.TITLE")}</h2>
      <hr className="divider" />

      <div className="user-data-table">
        <Suspense fallback={<SpinnerSvg />}>
          <UserPreferencesData />
        </Suspense>
      </div>

      <hr className="divider" />
      <h2 className="section-title">{translate("IDENTITIES.TITLE")}</h2>
      <hr className="divider" />

      <div className="user-data-table user-data-table--identities">
        <Suspense fallback={<SpinnerSvg />}>
          <UserIdentitiesData />
        </Suspense>
      </div>
    </>
  );
}
