import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { supabase } from "@/libs/supabase";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Faiz Sulistiyo",
  description: "Faiz's Portfolio that include recent featured work.",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: ["https://ahqnjoplwdpkoaxfnwbd.supabase.co/storage/v1/object/public/assets/portfolio-thumbnail.png"],
  },
  twitter: {  
    title: "Faiz Sulistiyo",
    description: "Faiz's Portfolio that include recent featured work.",
    images: {
      url: "https://ahqnjoplwdpkoaxfnwbd.supabase.co/storage/v1/object/public/assets/portfolio-thumbnail.png",
      alt: "Faiz Sulistiyo",
    }
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data:about, error:errAbout} = await supabase.from("about").select("resume").limit(1).single();
  if (errAbout) {
    notFound();
  }
  return (
    <html lang="en">
      <link rel="icon" href="/app/favicon.png" />
      <body className={`${inter.className}`}>
        <Header resume={about.resume}/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
