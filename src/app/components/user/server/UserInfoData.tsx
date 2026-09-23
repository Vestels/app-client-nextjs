// import { getTranslations } from "next-intl/server";
// import { UserAuth0Info } from "@/interfaces/user.interface";
// import { getCurrentUserInfoDataAction } from "@/actions/user.actions";
// import CheckSvg from "@/app/components/svgs/CheckSvg";
// import CloseSvg from "@/app/components/svgs/CloseSvg";
// import NoDataSvg from "@/app/components/svgs/NoDataSvg";

// export default async function UserInfoData() {
//   const translate = await getTranslations("APP.PROFILE.ME");
//   const userInfo: UserAuth0Info = await getCurrentUserInfoDataAction();
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
