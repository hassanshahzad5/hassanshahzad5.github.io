import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { StrictMode } from "react";

const mukta = Mukta({
  variable: "--font-mukta",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hassan Shahzad",
  description: "Personal site for Hassan Shahzad, a software engineer and full-stack developer from Broomfield, Colorado. B.S. in Computer Science and minor degree in Creative Technology & Design at the University of Colorado Boulder (CU Boulder). Passionate about powerlifting, innovation, and building impactful software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html lang="en">
        <body className={`${mukta.variable} ${mukta.variable} antialiased`}>
          <main className='flex flex-col justify-self-center items-center w-[100vw] md:w-[60vw] bg-zinc-900'>
            <Navbar></Navbar>
            <Header></Header>
            {/* <section className='w-[100vw] md:w-3/4 p-5 flex flex-col items-center h-screen'>
              <section className='w-[100%] flex flex-col flex-1 justify-start items-start bg-zinc-900 p-5 overflow-y-scroll'>
                {children}
              </section>
            </section> */}
            {children}
            <Footer></Footer>
          </main>
        </body>
      </html>
    </StrictMode>
  );
}
