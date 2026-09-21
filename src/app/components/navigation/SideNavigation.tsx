"use client";

import { AUTH_ROUTES, ROUTES } from "@/app/constants/routes";
import Button from "@/app/components/Button";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type SideNaviogationProps = {
  isOpen: boolean;
};

export default function SideNavigation({ isOpen }: SideNaviogationProps) {
  const translate = useTranslations("APP");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <aside className={`side-navigation ${isMobile && isOpen ? "side-navigation--open" : ""}`}>
        <nav>
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
