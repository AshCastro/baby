import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Baby-sitting à Roanne, Le Coteau, Riorges, Mably & Perreux | Ashley",
  description:
    "Ashley, baby-sitter de confiance dans la région roannaise : garde d’enfants à Roanne, Le Coteau, Riorges, Mably et Perreux. Expérimentée, disponible, et aussi aide au ménage et cuisine.",
  keywords: [
    "baby-sitting Roanne",
    "baby-sitting Le Coteau",
    "baby-sitting Riorges",
    "baby-sitting Mably",
    "baby-sitting Perreux",
    "baby-sitter Roanne",
    "babysitting région roannaise",
  ],
  alternates: {
    canonical: "https://tonsite.com", // mets ton domaine ici
  },
};


<div className="absolute inset-0 overflow-hidden z-0">
  {["👶","🍼","💕","⭐","🌸"].map((emoji, i) => (
    <span
      key={i}
      className="emoji"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 5}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    >
      {emoji}
    </span>
  ))}
</div>


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-800">
        {/* Blur décoratif */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}