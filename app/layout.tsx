import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import "aos/dist/aos.css"
import {Footer, Header} from "@/components"
import {supabase} from "@/libs/supabase"
import {notFound} from "next/navigation"
import {AosInit} from "@/libs/Aos"
import Head from "next/head"

const inter = Inter({subsets: ["latin"], display: "swap"})
export const revalidate = Number(process.env.NEXT_REVALIDATE_INTERVAL ?? 0)
export const metadata: Metadata = {
  title: "Faiz Sulistiyo",
  description: "Faiz's Portfolio that include recent featured work.",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [
      "https://ahqnjoplwdpkoaxfnwbd.supabase.co/storage/v1/object/public/assets/portfolio-thumbnail.png",
    ],
  },
  twitter: {
    title: "Faiz Sulistiyo",
    description: "Faiz's Portfolio that include recent featured work.",
    images: {
      url: "https://ahqnjoplwdpkoaxfnwbd.supabase.co/storage/v1/object/public/assets/portfolio-thumbnail.png",
      alt: "Faiz Sulistiyo",
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const {data: about, error: errAbout} = await supabase
    .from("about")
    .select("resume")
    .limit(1)
    .single()
  if (errAbout) {
    notFound()
  }
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="S_VGOkxk99-pqguiiziYxKVAuzl7-6KHcmgvw4LwnVM"
        />
      </Head>
      <body className={`${inter.className}`}>
        <AosInit />
        <Header resume={about.resume} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
