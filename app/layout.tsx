import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer"

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
    <html lang="en">
      <body className={`${mukta.variable} ${mukta.variable} antialiased`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
