// import { getTranslations } from "next-intl/server";
// import { API_ROUTES } from "@/app/constants/routes";
// import { apiClient } from "@/libs/api-client.lib";
// import { UserAuth0Info } from "@/interfaces/user.interface";
// import ErrorStatus from "@/app/components/status/ErrorStatus";
// import CheckSvg from "@/app/components/svgs/CheckSvg";
// import CloseSvg from "@/app/components/svgs/CloseSvg";
// import NoDataSvg from "@/app/components/svgs/NoDataSvg";

// export default async function UserInfoData() {
//   const translate = await getTranslations("APP.PROFILE.ME");
//   const userInfo: UserAuth0Info = await apiClient<UserAuth0Info>(`${API_ROUTES.USERS.USERS}/${API_ROUTES.USERS.INFO}`);

//   return (
//     <>
//       {userInfo && (
//         <div className="user-informations__data-row">
//           <strong className="property">{translate("EMAIL_VERIFIED")}</strong>
//           {userInfo.emailVerified != null ? (
//             <p className={`value status ${userInfo.emailVerified ? "status--verified" : "status--not-verified"}`}>
//               {userInfo.emailVerified ? <CheckSvg /> : <CloseSvg />}
//             </p>
//           ) : (
//             <NoDataSvg />
//           )}
//         </div>
//       )}
//     </>
//   );
// }
