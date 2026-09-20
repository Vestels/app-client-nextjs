import { ROUTES } from "@/app/constants/routes";
import { getTranslations } from "next-intl/server";
import Button from "@/app/components/Button";

export default async function Home() {
  const translate = await getTranslations("APP");

  return (
    <>
      <h1>{translate("MAIN_PAGE.TITLE")}</h1>
      <hr className="divider" />

      <Button href={`/${ROUTES.PROFILE}`}>{translate("ACTIONS.PROFILE.LABEL")}</Button>
    </>
  );
}
