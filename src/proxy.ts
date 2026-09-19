import { auth0 } from "@/lib/auth0.lib";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/auth")) {
    return auth0.middleware(request);
  }

  const session = await auth0.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return auth0.middleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|fonts|logo|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|site.webmanifest).*)"],
};
