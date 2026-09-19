import { IdentityProvider } from "@/enums/user.enum";
import { UserIdentity } from "@/interfaces/user.interface";
import { apiClient } from "@/lib/api-client.lib";
import ErrorStatus from "../../status/ErrorStatus";
import { USERS } from "@/app/constants/routes";
import React from "react";
import { getTranslations } from "next-intl/server";

export default async function UserIdentitiesData() {
  const translate = await getTranslations("APP");
  let userIdentities: UserIdentity[];

  try {
    userIdentities = await apiClient<UserIdentity[]>(USERS.IDENTITIES);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  return (
    <>
      <div className="user-informations user-informations--identity">
        {userIdentities && userIdentities.length > 0 && (
          <React.Fragment>
            {userIdentities.map((identity) => (
              <React.Fragment key={identity.provider}>
                <p>{translate(`ENUMS.IDENTITY_PROVIDER.${identity.provider}`)}</p>

                <hr className="divider" />

                <div className="user-informations__data-row">
                  <strong className="property">{translate("PROFILE.IDENTITIES.CREATED_AT")}</strong>
                  {identity.createdAt ? (
                    <p className="value">{new Date(identity.createdAt).toLocaleDateString()}</p>
                  ) : (
                    "-"
                  )}
                </div>

                <div className="user-informations__data-row">
                  <strong className="property">{translate("PROFILE.IDENTITIES.LAST_USED_AT")}</strong>
                  {identity.lastUsedAt ? (
                    <p className="value">{new Date(identity.lastUsedAt).toLocaleDateString()}</p>
                  ) : (
                    "-"
                  )}
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </div>
    </>
  );
}
