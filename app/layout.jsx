import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import "./styles/general.css";
import "./styles/index.css";
import "./styles/queries.css";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: [300, 400, 500, 700],
  fallbacks: ["sans-serif"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://codamate.nathan-lemoine.be"),
  title: "CodaMate - La plateforme d'aide au développement",
  description:
    "Tu as besoin d'aide pour ton projet ? Tu as une notion à revoir ? Tu es au bon endroit ! Je propose des sessions de rattrapage en Java et en JavaScript.",
  referrer: "origin-when-cross-origin",
  authors: ["Nathan Lemoine"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  OpenGraph: {
    type: "website",
    locale: "fr-BE",
    url: "https://codamate.nathan-lemoine.be",
    site_name: "CodaMate - La plateforme d'aide au développement",
    title: "CodaMate - La plateforme d'aide au développement",
    description:
      "Tu as besoin d'aide pour ton projet ? Tu as une notion à revoir ? Tu es au bon endroit ! Je propose des sessions de rattrapage en Java et en JavaScript.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-BE">
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
