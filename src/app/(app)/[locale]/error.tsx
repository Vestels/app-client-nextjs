"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const translate = useTranslations("APP");

  return (
    <div className="error-page">
      <h1 className="error-page__status">{translate("ERROR.LABEL")}</h1>
      <Image
        className="error-page__illustrations"
        src={"/assets/illustrations/bushes-of-leaves.svg"}
        width={200}
        height={200}
        loading="eager"
        alt=""
      />
      <button className="btn btn--retry" onClick={() => reset()}>
        {translate("ACTIONS.ERROR.RETRY")}
      </button>
    </div>
  );
}
