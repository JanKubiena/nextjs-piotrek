import { MenuContextProvider } from "./context/menu";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Photo from "./components/main/Photo";
import ContactDetails from "./components/main/ContactDetails";
import CookiesConsent from "./components/CookiesConsent";
import SpecializationsMenu from "./components/main/SpecializationsList";
import { Sora, PT_Serif } from "next/font/google";

import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

// export const ptserif = PT_Serif({
//     weight: ["400", "700"],
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--font-ptserif",
// });

export const metadata = {
  title: {
    default:
      "Adwokat Piotr Tomasz Woźniak | Kancelaria Adwokacka Piotr Tomasz Woźniak",
    template: "%s | Kancelaria Adwokacka Piotr Tomasz Woźniak",
  },
  description:
    "Prawo cywilne, prawo rodzine, odszkodowania, księgi wieczyste i hipoteka, postępowania egzekucyjne, prawo bankowe i spółdzielcze",
};

export default function RootLayout({ children }) {
  return (
    <MenuContextProvider>
      <html lang="pl" className={`${sora.variable}`}>
        <body
          className={`overscroll-none border-t-[16px] border-pw-gold pt-4 lg:pt-0`}
        >
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}');
                        `}
          </Script>
          <div className="mx-auto max-w-[1366px]">
            <Header />

            <div className="flex justify-between gap-10 px-5 pb-10 md:px-14 xl:gap-20">
              {/* left column */}
              <div className="hidden w-55 shrink-0 flex-col gap-y-10 md:flex">
                <Photo />
                <ContactDetails />
              </div>

              {/* main column */}
              <main className="flex w-full flex-col gap-y-12">
                {children}
                <div className="lg:hidden">
                  <SpecializationsMenu />
                </div>
                <div className="shrink text-left md:hidden">
                  <ContactDetails />
                </div>
              </main>

              {/* right column */}
              <div className="hidden w-55 shrink-0 lg:block">
                <SpecializationsMenu />
              </div>
            </div>
          </div>
          <footer className="mt-8 hidden lg:block">
            <Footer />
          </footer>
          <CookiesConsent />
        </body>
      </html>
    </MenuContextProvider>
  );
}
