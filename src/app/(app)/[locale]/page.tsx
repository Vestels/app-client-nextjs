import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
  const translate = await getTranslations("APP");

  return (
    <>
      <h1>{translate("MAIN_PAGE.TITLE")}</h1>
      <hr className="divider" />

      <Link href={"/profile"} className="btn">
        {translate("ACTIONS.PROFILE.LABEL")}
      </Link>
    </>
  );
}
