import "@/styles/styles.scss";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { getCurrentUser } from "@/lib/get-current-user.lib";
import { NextIntlClientProvider } from "next-intl";
import { AUTH_ROUTES } from "@/app/constants/routes";
import LogoutSvg from "@/app/components/svgs/LogoutSvg";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Fitness application",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getCurrentUser();
  const translate = await getTranslations("APP");
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} data-theme="light" data-scroll-behavior="smooth">
      <body>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__logo">
              <h1>{translate("APP_NAME")}</h1>
            </div>
            <Button href={`/${AUTH_ROUTES.LOGOUT}`}>
              <LogoutSvg />
            </Button>
          </div>
        </header>
        <main className="main">
          <article className="main-container">
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </article>
        </main>
      </body>
    </html>
  );
}
