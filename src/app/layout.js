import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopNav from "@/Components/TopNav";
import Provider from "../Redux/Provider";
import LeftNav from "@/Components/LeftNav";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gift Store",
  description: "Online store for all your gift needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <header>
            <TopNav />
          </header>
          <main>
            <aside>
              <LeftNav />
            </aside>
            <section>{children}</section>
          </main>
          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
