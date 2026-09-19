import { Metadata } from "next";
import LogoutSvg from "./components/svgs/LogoutSvg";
import ".././styles/styles.scss";

export const metadata: Metadata = {
  title: "Fitness App",
  description: "Fitness application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" data-theme="light" data-scroll-behavior="smooth">
      <body>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__logo">
              <h1>App Logo</h1>
            </div>
            <a href="/auth/logout" className="btn btn--logout">
              <LogoutSvg />
            </a>
          </div>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
