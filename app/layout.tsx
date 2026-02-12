import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Surreal Construções e Reformas | Cascavel, PR",
    template: "%s | Surreal Construções e Reformas",
  },
  description: "Empresa especializada em construção e reformas em Cascavel, PR. 15 anos de experiência transformando sonhos em realidade. Reformas completas, construções residenciais e comerciais. Solicite seu orçamento!",
  keywords: [
    "construção",
    "reformas",
    "Cascavel",
    "Paraná",
    "construção civil",
    "reformas residenciais",
    "reformas comerciais",
    "obras",
    "arquitetura",
    "engenharia",
    "construção de casas",
    "reforma de apartamentos",
    "Cascavel PR",
  ],
  authors: [{ name: "Surreal Construções e Reformas" }],
  creator: "Surreal Construções e Reformas",
  publisher: "Surreal Construções e Reformas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://surreal-obras-site.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Surreal Construções e Reformas",
    title: "Surreal Construções e Reformas | Cascavel, PR",
    description: "Empresa especializada em construção e reformas em Cascavel, PR. 15 anos de experiência transformando sonhos em realidade.",
    images: [
      {
        url: "https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/logo_black.png",
        width: 1200,
        height: 630,
        alt: "Surreal Construções e Reformas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surreal Construções e Reformas | Cascavel, PR",
    description: "Empresa especializada em construção e reformas em Cascavel, PR. 15 anos de experiência.",
    images: ["https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/logo_black.png"],
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
  icons: {
    icon: "https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/fivicon.jpg",
    apple: "https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/fivicon.jpg",
  },
  verification: {
    google: "f6qe4pxYunbh6y1FASThVp7aqC4n9KW-vTWIZPDa_3c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${montserrat.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
