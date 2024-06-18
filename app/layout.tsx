// import Head from "next/head";
import React, { ReactNode, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { theme } from "Utils/themes";

export default function RootLayout({ children }: { children: ReactNode }) {
   const id = Date.now().toString();
   return (
      <html lang="en">
         <head>
            <title>Tra Cứu Numerology TheLotusCoach</title>
            <meta
               name="description"
               content="Tra Cứu Numerology TheLotusCoach"
            />
            <link rel="icon" href="/Images/logoPNG.png" />
            <Script 
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8703671366589995" 
               crossOrigin="anonymous"
               strategy="lazyOnload"/>
         
         </head>

         <body>
            <ChakraProvider theme={theme}>
               

               {children}
            </ChakraProvider>
           
         </body>
      </html>
   );
}
