import { auth0 } from "@/lib/auth0.lib";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/auth")) {
    return auth0.middleware(request);
  }

  const i18nResponse = handleI18nRouting(request);

  if (i18nResponse.status >= 300 && i18nResponse.status < 400) {
    return i18nResponse;
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
