import "./globals.css";
import Header from "./components/header/Completed-header";
import Footer from "./components/footer/Footer";
import Photo from "./components/main/Photo";
import ContactDetails from "./components/main/Contact-details";
import SpecializationsMenu from "./components/main/Specializations-menu";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Website project in NextJS + TailwindCSS",
  description: "Created by Jasiek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${poppins.variable}`}>
      <body className="border-t-[16px] border-pw-gold">
        <div className="max-w-[1366px] mx-auto">
          <div className="bg-white pt-10 text-pw-green">
            <Header />
            
            <div className="flex justify-between gap-10 xl:gap-20 px-5 md:px-14 pb-10">

              {/* left column */}
              <div className="hidden md:flex flex-col gap-y-6 shrink-0 w-55">
                <Photo />
                <ContactDetails />
              </div>

              {/* main column */}
              <div className="flex flex-col w-full gap-y-10">
                <div className="flex md:hidden">
                  <Photo />
                </div>
                {children}
                <div className="lg:hidden">
                  <SpecializationsMenu />
                </div>
                <div className="md:hidden">
                  <ContactDetails />
                </div>
              </div>

              {/* right column */}
              <div className="hidden lg:block shrink-0 w-55">
                <SpecializationsMenu />
              </div>

            </div>
          </div>
        </div>

        <div class="bg-pw-gold hidden lg:block">
          <Footer />
        </div>

      </body>
    </html>
  );
}
