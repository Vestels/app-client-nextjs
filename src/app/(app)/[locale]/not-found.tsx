"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const translate = useTranslations("APP");

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__label">{translate("STATUS.NOT_FOUND")}</h1>
      <Image
        className="not-found-page__illustration"
        src={"/assets/illustrations/leaves.svg"}
        width={80}
        height={80}
        alt=""
      />
      <Link href="/" className="btn">
        {translate("ACTIONS.ERROR.BACK_TO_HOME")}
      </Link>
    </div>
  );
}
