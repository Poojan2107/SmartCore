import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://smartcoretech.in"),
  title: "SmartCore Technologies | Bespoke Institute Management",
  description: "Custom digital infrastructure for leading coaching centers and tuition classes. We handle attendance, fees, and workflow automation.",
  openGraph: {
    title: "SmartCore Technologies | Bespoke Institute Management",
    description: "Custom digital infrastructure for leading coaching centers. Let SmartCore handle your administrative burden.",
    url: "https://smartcoretech.in",
    siteName: "SmartCore Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartCore Technologies Dashboard Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCore Technologies",
    description: "Bespoke digital infrastructure for coaching institutes in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-bg)] text-[var(--color-fg)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
