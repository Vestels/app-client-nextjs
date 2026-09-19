import { USERS } from "../../../constants/routes";
import { UserStatus } from "@/enums/user.enum";
import ErrorStatus from "../../status/ErrorStatus";
import { apiClient } from "@/lib/api-client.lib";
import UserInfoData from "./UserInfoData";
import { User } from "@/interfaces/user.interface";
import { formatDate } from "@/lib/format-date.lib";
import { getTranslations } from "next-intl/server";

export default async function UserData() {
  const translate = await getTranslations("APP");

  let user: User;

  try {
    user = await apiClient<User>(USERS.DATA);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return (
    <>
      <div className="user-informations">
        <UserInfoData />

        {user && (
          <>
            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.EMAIL")}</strong>
              {user.email ? <p className="value">{user.email}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.REGISTERED")}</strong>
              {user.createdAt ? <p className="value">{formatDate(user.createdAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.LAST_LOGIN")}</strong>
              {user.lastLoginAt ? <p className="value">{formatDate(user.lastLoginAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.LAST_ACTIVE")}</strong>
              {user.lastActivityAt ? <p className="value">{formatDate(user.lastActivityAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.LAST_UPDATED_AT")}</strong>
              {user.updatedAt ? <p className="value">{formatDate(user.updatedAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">{translate("PROFILE.ME.ACCOUNT_STATUS")}</strong>
              {user.userStatus ? <p className="value">{translate(`ENUMS.USER_STATUS.${user.userStatus}`)}</p> : "-"}
            </div>

            {user.deletionRequestAt && user.scheduledDeletionAt ? (
              <>
                <div className="user-informations__data-row">
                  <strong className="property">{translate("PROFILE.ME.DELETION_REQUESTED_AT")}</strong>
                  <p className="value">{formatDate(user.deletionRequestAt!)}</p>
                </div>

                <div className="user-informations__data-row">
                  <strong className="property">{translate("PROFILE.ME.DELETION_SCHEDULED_AT")}</strong>
                  <p className="value">{formatDate(user.scheduledDeletionAt!)}</p>
                </div>

                <div className="user-informations__data-row">
                  <button className="btn btn--restore-account value" type="button">
                    {translate("ACTIONS.PROFILE.RESTORE")}
                  </button>
                </div>
              </>
            ) : (
              <div className="user-informations__data-row">
                <button className="btn btn--delete-account value" type="button">
                  {translate("ACTIONS.PROFILE.DELETE")}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
