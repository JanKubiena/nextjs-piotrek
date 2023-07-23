"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function CookiesConsent() {
  const [consent, setConsent] = useState("true");

  useEffect(() => {
    const consent = Cookies.get("consent");
    consent === undefined && Cookies.set("consent", "false", { expires: 365 });
    setConsent(consent);
  }, []);

  const handleConsent = () => {
    Cookies.set("consent", "true", { expires: 365 });
    setConsent(Cookies.get("consent"));
  };

  return (
    <div className={consent === "true" ? "hidden" : ""}>
      <div className="flex fixed bottom-4 max-w-[1254px] mx-auto border border-pw-gold bg-pw-gold-50 inset-x-5 md:inset-x-14 p-8 flex-wrap lg:flex-nowrap items-center lg:justify-between gap-5 lg:gap-[160px] z-50">
        <p className="font-sans text-xs text-charcoal">
          Ta strona używa plików cookies (tzw. ciasteczka), które zapisują się w
          przeglądarce internetowej Twojego urządzenia. Dzięki nim zapewniamy
          prawidłowe działanie strony internetowej, a także możemy lepiej
          dostosować ją do preferencji użytkowników.
        </p>
        <button
          className="px-4 py-2 text-sm text-white bg-pw-green hover:bg-pw-green-800"
          onClick={handleConsent}
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
}
