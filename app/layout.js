import './globals.css'
import { poppins } from './fonts';
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Stopka'

export const metadata = {
  title: 'Website project in NextJS + TailwindCSS',
  description: 'Created by Jasiek',
}

const pages = [
  {
    id: "1",
    name:"Home",
    href:"/"
  },
  {
    id: "2",
    name:"O Kancelarii",
    href:"/o-kancelarii"
  },
  {
    id: "3",
    name:"Specjalizacje",
    href:"/specjalizacje"
  },
  {
    id: "4",
    name:"Artykuły",
    href:"/artykuly"
  },
  {
    id: "5",
    name:"Kontakt",
    href:"/kontakt"
  },

]

export default function RootLayout({ children }){
  return (
    <html lang="pl" className={`${poppins.variable}`}>
      <body className="bg-gradient-to-b from-maastricht-blue to-midnight-green px-20 py-10">
        <div className="h-screen bg-white">
          <NavBar pages={pages}
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
