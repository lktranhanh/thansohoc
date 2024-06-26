import React, { ReactNode } from 'react';
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { theme } from "Utils/themes";

export default function RootLayout({ children }: { children: ReactNode }) {
   const id = Date.now().toString();

   return (
      <ChakraProvider theme={theme}>
         <Head>
            <title>Tra Cứu Numerology TheLotusCoach</title>
            <meta name="description" content="Tra Cứu Numerology TheLotusCoach" />
            <meta name="robots" content="index, follow" />
            <meta name="google-adsense-account" content="ca-pub-8703671366589995" />
            <link rel="icon" href="/Images/logoPNG.png" />
            <Script
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8703671366589995"
               crossOrigin="anonymous"
               strategy="lazyOnload"
            />
         </Head>
         <body>
            {children}
         </body>
      </ChakraProvider>
   );
}
