"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const translate = useTranslations("APP");

  return (
    <div className="error-page">
      <h1 className="error-page__label">{translate("STATUS.ERROR")}</h1>
      <Image
        className="error-page__illustration"
        src={"/assets/illustrations/bushes-of-leaves.svg"}
        width={80}
        height={80}
        alt=""
      />
      <button className="btn btn--retry" type="button" onClick={() => reset()}>
        {translate("ACTIONS.ERROR.RETRY")}
      </button>
    </div>
  );
}
