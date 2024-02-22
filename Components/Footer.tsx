"use client";
import { FC } from "react";
import Image from "next/image";
import {
   Icon,
   Wrap,
   Tooltip,
   Feeacback,
   CustomCard,
   useColorMode,
   AiFillGithub,
} from "Components";

export const Footer: FC = () => {
   const { toggleColorMode, colorMode } = useColorMode();
   return (
      <footer>
         <Wrap justify="center" my={1}>
            <Tooltip>
               <CustomCard
                as="a"
                href="https://thelotuscoach.vn"
                target="_self"
               >
                  <Image
                     src="/Images/numerologyPNG.png"
                     alt="numerology logo"
                     placeholder="blur"
                     blurDataURL="/Images/numerologyPNG.png"
                     style={{
                        cursor: "pointer",
                     }}
                     width={300}
                     height={300}
                     // onClick={toggleColorMode}
                  />
               </CustomCard>
            </Tooltip>
            

          
         </Wrap>
         <Wrap justify="center" my={1}>
         <Tooltip label={colorMode + " mode"} hasArrow>
               <CustomCard
               >
                  <Image
                     src="/Images/day_nightPNG.png"
                     alt="numerology logo"
                     placeholder="blur"
                     blurDataURL="/Images/day_nightPNG.png"
                     style={{
                        cursor: "pointer",
                     }}
                     width={50}
                     height={50}
                     onClick={toggleColorMode}
                  />
               </CustomCard>
            </Tooltip>
            </Wrap>
      </footer>
   );
};
