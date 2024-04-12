import {Montserrat} from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "@/styles/reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import localFont from 'next/font/local';
import {FacebookPixel} from "@/analytics/FacebookPixel";


const montserrat = Montserrat({
   subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
   variable: '--montserrat-font'
});

const myFont = localFont({
   src: './fonts/dance_partner.ttf',
   variable: '--dance-font'
});

export const metadata = {
   title: "Ласкаво просимо до бізнес-клубу Millionario",
   description: "Бізнес-клуб Millionario",
};

export default function RootLayout({children}) {
   return (
      <html lang="uk">
      <head>
         <link rel="stylesheet" href="https://buy.ticketforevent.com/css/embreg.css"/>
      </head>
      <body className={`${myFont.variable} ${montserrat.variable} font-sans`}>
      <Header/>
      {children}
      <FacebookPixel/>
      <Footer/>
      </body>
      </html>
   );
}
