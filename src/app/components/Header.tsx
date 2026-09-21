"use client";

import { useTranslations } from "next-intl";
import Button from "@/app/components/Button";
import NoDataSvg from "@/app/components/svgs/NoDataSvg";
import CheckSvg from "@/app/components/svgs/CheckSvg";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type HeaderProps = {
  isSideNavigationOpen: boolean;
  onMenuOpen: () => void;
};

export default function Header({ isSideNavigationOpen, onMenuOpen }: HeaderProps) {
  const translate = useTranslations("APP");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <header className="header">
      <div className="header__wrapper">
        {isMobile && (
          <Button className="header__menu-button" onClick={onMenuOpen}>
            {isSideNavigationOpen ? <CheckSvg /> : <NoDataSvg />}
          </Button>
        )}
        <div className="header__logo">
          <h1>{translate("APP_NAME")}</h1>
        </div>
      </div>
    </header>
  );
}
