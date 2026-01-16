import type React from "react"
import type { Metadata } from "next"
import { Geist, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"
import { Preloader } from "@/components/preloader"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppChatbot } from "@/components/whatsapp-chatbot"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

const baseUrl = "https://www.lumoratriad.in"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Lumora Triad | Premium Web Development & UI/UX Agency",
    template: "%s | Lumora Triad",
  },
  description:
    "Lumora Triad is a premier digital agency specializing in custom web development, UI/UX design, and strategic branding. We build high-performance digital solutions for startups and businesses.",
  keywords: [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Digital Agency",
    "Software Development",
    "Lumora Triad",
    "Website Design India",
    "Custom Web Solutions",
    "App Development",
  ],
  authors: [{ name: "Lumora Triad", url: baseUrl }],
  creator: "Lumora Triad",
  publisher: "Lumora Triad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumora Triad | Premium Web Development & UI/UX Agency",
    description:
      "Lumora Triad delivers modern, reliable, and thoughtfully designed digital solutions with a focus on Technology, Design, and Delivery.",
    url: baseUrl,
    siteName: "Lumora Triad",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lumora Triad Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora Triad | Premium Web Development",
    description: "Transforming ideas into digital reality. Expert Web Development, UI/UX, and Branding services.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-primary selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Preloader />
          {children}
          <WhatsAppChatbot />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lumora Triad",
              alternateName: ["Lumora", "Lumora Triad Agency", "Lumora Tech"],
              url: "https://www.lumoratriad.in",
              logo: "https://www.lumoratriad.in/icon.svg",
              description: "Premium Digital Agency for Web Development & UI/UX Design",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 99478 84418",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "en"
              },
              sameAs: [
                "https://www.instagram.com/lumoratriad",
                "https://www.linkedin.com/company/lumoratriad",
                "https://twitter.com/lumoratriad"
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}

