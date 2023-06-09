import Link from "next/link";

export const metadata = {
    title: "Prawo cywilne",
};

export default function PrawoCywilnePage() {
    return (
      <article className="pt-4 font-sans leading-8 prose border-t-4 prose-h1:text-2xl prose-h1:text-pw-gold prose-h1:mb-8 lg:prose-h1:mb-12 prose-a:text-pw-green hover:prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-pw-gold hover:prose-a:underline hover:prose-a:decoration-pw-gold text-md border-t-pw-gold">
        <Link className="no-underline" href="/specjalizacje">
          <div className="flex items-center gap-4 pb-4 font-sans text-sm text-slate-500">
            <span className="font-normal no-underline">Specjalizacje</span>
            </div>
          </Link> 
        <h1 className="font-sans font-normal">Prawo cywilne</h1>
            <p>Kancelaria prowadzi sprawy z zakresu prawa cywilnego w zakresie:</p>
            <ul>
              <li>postępowań pomiędzy współwłaścicielami nieruchomości (zniesienie współwłasności, rozliczenie nakładów i pożytków, zarząd przymusowy, czynności przekraczające zwykły zarząd, zaskarżanie uchwał wspólnot mieszkaniowych)</li>
              <li>zasiedzenia</li>
              <li>uwłaszczenia </li>
              <li>eksmisji</li>
              <li>ochrony własności i naruszenia posiadania</li>
              <li>służebności (np. drogi koniecznej, przesyłu) </li>
              <li>rozgraniczenia </li>
              <li>postępowań spadkowych (stwierdzenie nabycia spadku ustawowe i testamentowe, dział spadku, zachowek, zapisy windykacyjne, długi spadkowe, dziedziczenie gospodarstw rolnych, uchylenie się od skutków oświadczeń o przyjęciu lub odrzuceniu spadku, uznanie za zmarłego)</li>
              <li>darowizny i odwołania darowizny</li>
              <li>dożywocia i renty</li>
              <li>skargi pauliańskiej</li>
              <li>bezpodstawnego wzbogacenia </li>
              <li>zlecenia i prowadzenia cudzych spraw bez zlecenia</li>
              <li>uzgodnienia treści księgi wieczystej z rzeczywistym stanem prawnym</li>
              <li>pożyczki (w tym zawieranych przez Internet) </li>
              <li>o ustalenie</li>
              <li>najmu i dzierżawy</li>
              <li>o zapłatę (również o wydanie nakazu zapłaty)</li>
            </ul>
        </article>
    );
}
