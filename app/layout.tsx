import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { LoadingProvider } from "@/components/GlobalLoadingProvider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DentaGest | Software Gestionale per Dentisti",
  description:
    "DentaGest e il software gestionale moderno per studi dentistici italiani. Gestisci pazienti, appuntamenti, cartelle cliniche, fatturazione elettronica e molto altro con un'app sicura e responsive.",
  authors: [
    {
      name: "Antigravity",
      url: "https://antigravity.dev/",
    },
  ],
  keywords: [
    "Gestionale Dentisti",
    "Software Dentistico",
    "Studio Dentistico",
    "Appuntamenti Dentista",
    "Fatturazione Elettronica",
    "Tessera Sanitaria",
    "Odontogramma",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Shadcn-UI",
    "Italia",
    "Dentista",
    "Odontoiatra",
    "Cartella Clinica",
    "Pazienti",
    "SaaS",
    "Cloud",
  ],
  icons: {
    icon: "/assets/icons/logo-icon.svg",
    shortcut: "/favicon.ico",
    apple: "/assets/icons/logo-icon.svg",
  },
  openGraph: {
    title: "DentaGest | Software Gestionale per Dentisti",
    description:
      "Il gestionale che i dentisti meritano. Moderno, cloud-native, pensato per gli studi dentistici italiani.",
    url: "https://dentagest.it/",
    images: [
      {
        url: "/assets/icons/logo-icon.svg",
        width: 120,
        height: 120,
        alt: "DentaGest Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "DentaGest | Software Gestionale per Dentisti",
    description:
      "Il gestionale che i dentisti meritano. Moderno, cloud-native, pensato per gli studi dentistici italiani.",
    images: ["/assets/icons/logo-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
