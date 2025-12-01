import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black Fire",
  description:
    "Cheerdance team bringing energy and passion to every performance.",
  appleWebApp: {
    title: "Black Fire",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "Black Fire",
    description:
      "Cheerdance team bringing energy and passion to every performance.",
    url: `https://black-fire-gamma.vercel.app`,
    siteName: "Black Fire Cheer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Black Fire Cheer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Black Fire`,
    description:
      "Cheerdance team bringing energy and passion to every performance.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest",
  themeColor: "#000001",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [
    "cheerdance",
    "Black Fire",
    "cheerleading Austria",
    "cheerleading Austria",
    "competitive cheer",
    "dance team",
  ],
};

export default function RootLayout({
  children,
  // modal,
}: Readonly<{
  children: React.ReactNode;
  // modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
        {children}
        {/* {modal} */}
        <Footer />
      </body>
    </html>
  );
}
