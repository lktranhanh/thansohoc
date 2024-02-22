// import Head from "next/head";
import { ReactNode } from "react";
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
            {/* <script
               async
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4328746565330736"
               crossOrigin="anonymous"
            ></script> */}
         </head>

         <body>
            <ChakraProvider theme={theme}>
               

               {children}
            </ChakraProvider>
           
         </body>
      </html>
   );
}
