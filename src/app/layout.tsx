import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanraj-pm.vercel.app"),
  applicationName: "Aman Raj Portfolio",
  authors: [{ name: "Aman Raj" }],
  icons: {
    icon: [{ url: "/favicon.ico", rel: "icon", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}` }} />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
