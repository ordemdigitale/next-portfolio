import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const unbounded = localFont({
  src: [
    {
      path: './fonts/Unbounded-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Unbounded-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Unbounded-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-unbounded',
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Lionel Dabo - Développeur d'applications",
  description: "Développeur d'applications web, mobile basé à Abidjan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${unbounded.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
