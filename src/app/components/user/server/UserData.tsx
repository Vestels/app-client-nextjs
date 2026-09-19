import { USERS } from "../../../constants/routes";
import { UserStatus } from "@/enums/user.enum";
import ErrorStatus from "../../status/ErrorStatus";
import { apiClient } from "@/lib/api-client.lib";
import UserInfoData from "./UserInfoData";
import { User } from "@/interfaces/user.interface";
import { formatDate } from "@/lib/format-date.lib";

export default async function UserData() {
  let user: User;

  try {
    user = await apiClient<User>(USERS.DATA);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  const statusLabels: Record<string, UserStatus> = {
    ACTIVE: UserStatus.ACTIVE,
    SUSPENDED: UserStatus.SUSPENDED,
    DEACTIVATED: UserStatus.DEACTIVATED,
    PENDING_DELETION: UserStatus.PENDING_DELETION,
  };

  return (
    <>
      <div className="user-informations">
        <UserInfoData />

        {user && (
          <>
            <div className="user-informations__data-row">
              <strong className="property">Email:</strong>
              {user.email ? <p className="value">{user.email}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">Regisztrált:</strong>
              {user.createdAt ? <p className="value">{formatDate(user.createdAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">Utolsó belépés:</strong>
              {user.lastLoginAt ? <p className="value">{formatDate(user.lastLoginAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">Utoljára aktív:</strong>
              {user.lastActivityAt ? <p className="value">{formatDate(user.lastActivityAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">Utoljára frissítve:</strong>
              {user.updatedAt ? <p className="value">{formatDate(user.updatedAt)}</p> : "-"}
            </div>

            <div className="user-informations__data-row">
              <strong className="property">Fiók státusz:</strong>
              {user.userStatus ? <p className="value">{statusLabels[user.userStatus]}</p> : "-"}
            </div>

            {user.deletionRequestAt && user.scheduledDeletionAt ? (
              <>
                <div className="user-informations__data-row">
                  <strong className="property">Deletion requested:</strong>
                  <p className="value">{formatDate(user.deletionRequestAt!)}</p>
                </div>

                <div className="user-informations__data-row">
                  <strong className="property">Deletion at:</strong>
                  <p className="value">{formatDate(user.scheduledDeletionAt!)}</p>
                </div>

                <div className="user-informations__data-row">
                  <button className="btn btn--restore-account value" type="button">
                    Fiók visszaállítása
                  </button>
                </div>
              </>
            ) : (
              <div className="user-informations__data-row">
                <button className="btn btn--delete-account value" type="button">
                  Fiók törlése
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
