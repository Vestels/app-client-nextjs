import { USERS } from "@/app/constants/routes";
import { apiClient } from "@/lib/api-client.lib";
import { UserAuth0Info } from "@/interfaces/user.interface";
import ErrorStatus from "../../status/ErrorStatus";
import CheckSvg from "../../svgs/CheckSvg";
import CloseSvg from "../../svgs/CloseSvg";
import NoDataSvg from "../../svgs/NoDataSvg";
import { getTranslations } from "next-intl/server";

export default async function UserInfoData() {
  const translate = await getTranslations("APP.PROFILE.ME");

  let userInfo: UserAuth0Info;

  try {
    userInfo = await apiClient<UserAuth0Info>(USERS.INFO);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return (
    <>
      {userInfo && (
        <div className="user-informations__data-row">
          <strong className="property">{translate("EMAIL_VERIFIED")}</strong>
          {userInfo.emailVerified != null ? (
            <p className={`value status ${userInfo.emailVerified ? "status--verified" : "status--not-verified"}`}>
              {userInfo.emailVerified ? <CheckSvg /> : <CloseSvg />}
            </p>
          ) : (
            <NoDataSvg />
          )}
        </div>
      )}
    </>
  );
}
