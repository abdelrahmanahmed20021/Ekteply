import Navbar from "@/components/interface/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ektply is a powerful web application that simplifies the process of creating professional reports and email templates using an intuitive API-driven approach. Generate and customize reports, letters, memos, and other written communications effortlessly. Save time and effort with Ektply."
        />
        <meta
          name="keywords"
          content="Ektply, web application, reports, email templates, API-driven, professional, simplify, generate, customize, letters, memos, written communications, time-saving, effort-saving"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Ektply - Simplify Report and Email Template Creation</title>

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Ektply - Simplify Report and Email Template Creation"
        />
        <meta
          property="og:description"
          content="Ektply is a powerful web application that simplifies the process of creating professional reports and email templates using an intuitive API-driven approach. Save time and effort with Ektply."
        />
        <meta property="og:image" content="path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ektply - Simplify Report and Email Template Creation"
        />
        <meta
          name="twitter:description"
          content="Ektply is a powerful web application that simplifies the process of creating professional reports and email templates using an intuitive API-driven approach. Save time and effort with Ektply."
        />
        <meta name="twitter:image" content="path/to/your/image.jpg" />
        <meta name="twitter:url" content="https://www.example.com" />

        {/* Other Meta Tags */}
        <meta name="robots" content="index,follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="Country/City" />
        <meta name="geo.placename" content="City" />
        <meta name="geo.position" content="latitude;longitude" />
        <meta name="ICBM" content="latitude;longitude" />
        <link rel="canonical" href="https://www.example.com" />

        {/* Fav Icon Meta Tags */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./assets/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="./assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* GOOGLE - FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <div className="sm:px-[40px] px-[20px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
