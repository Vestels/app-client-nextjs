import { IdentityProvider } from "@/enums/user.enum";
import { UserIdentity } from "@/interfaces/user.interface";
import { apiClient } from "@/lib/api-client.lib";
import ErrorStatus from "../../status/ErrorStatus";
import { USERS } from "@/app/constants/routes";
import React from "react";

export default async function UserIdentitiesData() {
  let userIdentities: UserIdentity[];

  try {
    userIdentities = await apiClient<UserIdentity[]>(USERS.IDENTITIES);
  } catch (error) {
    console.log(error);
    return <ErrorStatus />;
  }

  const provider: Record<string, IdentityProvider> = {
    PASSWORD: IdentityProvider.PASSWORD,
  };

  return (
    <>
      <div className="user-informations user-informations--identity">
        {userIdentities && userIdentities.length > 0 && (
          <React.Fragment>
            {userIdentities.map((identity) => (
              <React.Fragment key={identity.subject}>
                <p>{provider[identity.provider]}</p>

                <hr className="divider" />

                <div className="user-informations__data-row">
                  <strong className="property">Létrehozva:</strong>
                  {identity.createdAt ? (
                    <p className="value">{new Date(identity.createdAt).toLocaleDateString()}</p>
                  ) : (
                    "-"
                  )}
                </div>

                <div className="user-informations__data-row">
                  <strong className="property">Utolsó használat:</strong>
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
