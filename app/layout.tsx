import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
//export const instant = false;

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
