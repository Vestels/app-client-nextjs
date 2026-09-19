"use client";

import Image from "next/image";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="error-page">
      <h1 className="error-page__status">404</h1>
      <Image
        className="error-page__illustrations"
        src={"/assets/illustrations/bushes-of-leaves.svg"}
        width={200}
        height={200}
        loading="eager"
        alt=""
      />
      <button className="btn btn--retry" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
