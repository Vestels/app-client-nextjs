import { AUTH_ROUTES, ROUTES } from "@/app/constants/routes";
import Button from "@/app/components/Button";
import { getTranslations } from "next-intl/server";

export default async function SideNavigation() {
  const translate = await getTranslations("APP");

  return (
    <>
      <aside className="side-navigation">
        <nav className="side-navigation__nav">
          <ul className="side-navigation__list">
            <li className="side-navigation__list-item">
              <Button variant={"tertiary"} href={`${ROUTES.HOME}`}>
                {translate("ROUTES.HOME")}
              </Button>
            </li>
            <li className="side-navigation__list-item">
              <Button variant={"tertiary"} href={`/${ROUTES.PROFILE}`}>
                {translate("ROUTES.PROFILE")}
              </Button>
            </li>
          </ul>
          <hr className="divider" />
          <Button href={`/${AUTH_ROUTES.LOGOUT}`}>{translate("ACTIONS.LOGOUT")}</Button>
        </nav>
      </aside>
    </>
  );
}
