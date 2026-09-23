import { getTranslations } from "next-intl/server";
import { API_ROUTES } from "@/app/constants/routes";
import { apiClient } from "@/libs/api-client.lib";
import { User } from "@/interfaces/user.interface";
import { formatDate } from "@/utils/format-date.util";
// import UserInfoData from "@/app/components/user/server/UserInfoData";
import Button from "@/app/components/Button";

export default async function UserData() {
  const translate = await getTranslations("APP");
  const user: User = await apiClient<User>(`${API_ROUTES.USERS.USERS}/${API_ROUTES.USERS.DATA}`);

  return (
    <>
      <div className="user-informations">
        {/* <UserInfoData /> */}

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
                  <p className="value">{formatDate(user.deletionRequestAt!, true)}</p>
                </div>

                <div className="user-informations__data-row">
                  <strong className="property">{translate("PROFILE.ME.DELETION_SCHEDULED_AT")}</strong>
                  <p className="value">{formatDate(user.scheduledDeletionAt!, true)}</p>
                </div>

                <Button variant={"secondary"}>{translate("ACTIONS.PROFILE.RESTORE")}</Button>
              </>
            ) : (
              <Button variant={"secondary"}>{translate("ACTIONS.PROFILE.DELETE")}</Button>
            )}
          </>
        )}
      </div>
    </>
  );
}
