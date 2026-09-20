import "@/styles/styles.scss";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { getCurrentUser } from "@/lib/get-current-user.lib";
import SideNavigation from "@/app/components/SideNavigation";

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
          </div>
        </header>
        <main className="main">
          <SideNavigation />
          <article className="main-container">
            <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
          </article>
        </main>
      </body>
    </html>
  );
}
