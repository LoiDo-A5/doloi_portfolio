import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do Loi",
  metadataBase: new URL("https://hthanhlong97.ca"),
  description: "Software Engineer - Open to work",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Do Loi",
    description: "Software Engineer - Open to work",
    images: [
      {
        url: "/images/personal.jpg",
      },
    ],
    siteName: "Do Loi",
    locale: "ca_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Loi",
    description: "Software Engineer - Open to work",
    images: "/images/personal.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
