export default function CookiesContainer() {
    return (
        <div className="fixed bottom-4 max-w-[1254px] mx-auto border border-pw-gold bg-white inset-x-5 md:inset-x-14 p-8 flex flex-wrap lg:flex-nowrap items-center lg:justify-between gap-5 lg:gap-[160px] z-50">
            <p className="font-sans text-xs text-charcoal">
                Ta strona używa plików cookies (tzw. ciasteczka), które zapisują się w przeglądarce internetowej Twojego urządzenia.
                Dzięki nim zapewniamy prawidłowe działanie strony internetowej, a także możemy lepiej dostosować ją do preferencji użytkowników.
            </p>
            <button className="bg-pw-green px-4 py-2 text-white text-sm hover:bg-pw-green-800 ">
                Rozumiem
            </button>
        </div>
    )
}