import { type FC } from "react";
import Head from "next/head";

export const Header: FC = () => {
   return (
      <Head>
         <title fontSize="sm">Tra Cứu Numerology TheLotusCoach</title>
         <meta name="description" content="Tra Cứu Numerology TheLotusCoach" />
         <link rel="icon" href="/Images/logoPNG.png" />
      </Head>
   );
};
