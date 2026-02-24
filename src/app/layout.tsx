import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Wildan Dhiya Ulhaq - Full Stack Developer",
  description:
    "Welcome to my portfolio! I'm Muhammad Wildan Dhiya Ulhaq, a passionate Full Stack Developer...",

  openGraph: {
    title: "Muhammad Wildan Dhiya Ulhaq - Full Stack Developer",
    description:
      "Explore my projects, skills, and experience.",
    url: "https://domainkamu.com",
    siteName: "Muhammad Wildan Dhiya Ulhaq Portfolio",
    images: [
      {
        url: "/og-image.png", // taruh di folder /public
        width: 1200,
        height: 630,
        alt: "Muhammad Wildan Dhiya Ulhaq Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Wildan Dhiya Ulhaq - Full Stack Developer",
    description:
      "Explore my projects, skills, and experience.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
